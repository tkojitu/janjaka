import Chord from "./Chord.js";

export default class {
	constructor(sid, name, chords) {
		this.sid = sid;
		this.name = name;
		this.chords = chords;
	}

	toString() {
		return this.name + "\n" + this.toStringChords();
	}

	toStringChords() {
		let ret = "";
		for (let chord of this.chords) {
			ret += chord.toString();
		}
		return ret;
	}

	add(book, note, half, triad, seventh) {
		let id = "chord" + this.chords.length;
		let chord = new Chord(book, id, note, half, triad, seventh);
		this.chords.push(chord);
		return chord;
	}

	remove() {
		this.chords.pop();
	}

	load(book, record) {
		let lines = record.split("\n");
		let name = lines.shift();
		if (!name || lines.length == 0) {
			return null;
		}
		this.name = name;
		if (lines.length % 4 != 0) {
			return null;
		}
		let chords = [];
		let i = 0;
		while (i < lines.length) {
			let id = book.getSymId(chords.length);
			let note = lines[i++];
			let half = lines[i++];
			let triad = lines[i++];
			let seventh = lines[i++];
			chords.push(new Chord(book, id, note, half, triad, seventh));
		}
		this.chords = chords;
		return this;
	}
}
