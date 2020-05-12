import Chord from "./Chord.js";
import Song from "./Song.js";

export default class {
	constructor() {
		this.work = new Song("", "", []);
		this.songs = [];
	}

	init() {
		let songs = this.loadUsers();
		this.songs = songs.concat(this.getDefaults());
	}

	loadUsers() {
		let str = window.localStorage.getItem("janjaka");
		if (!str) {
			return [];
		}
		let records = str.split("\n\n");
		if (records.length == 0) {
			return [];
		}
		let songs = [];
		for (let record of records) {
			let song = this.loadSong("u" + songs.length, record);
			if (!song) {
				continue;
			}
			songs.push(song);
		}
		return songs;
	}

	loadSong(sid, record) {
		let song = new Song(sid, "", []);
		if (!song.load(this, record)) {
			return null;
		}
		return song;
	}

	getDefaults() {
		let sets = [];
		sets.push(new Song("d" + 0, "C F G", this.newCFG()));
		sets.push(new Song("d" + 1, "D G A", this.newDGA()));
		return sets;
	}

	getSymId(n) {
		return "chord" + n;
	}

	getSymNote(name) {
		return "note" + name;
	}

	getSymFlat() {
		return "flat";
	}

	getSymSharp() {
		return "sharp";
	}

	getSymNatural() {
		return "nohalf";
	}

	getSymMinor() {
		return "minor";
	}

	getSymDim() {
		return "dim";
	}

	getSymMajor() {
		return "major";
	}

	getSym7() {
		return "7";
	}

	getSymMajor7() {
		return "major7";
	}

	getSymDim7() {
		return "dim7";
	}

	getSymNo7() {
		return "no7";
	}

	newCFG() {
		let set = [];
		set.push(this.newSimpleChord(0, "C"));
		set.push(this.newSimpleChord(1, "F"));
		set.push(this.newSimpleChord(2, "G"));
		return set;
	}

	newDGA() {
		let set = [];
		set.push(this.newSimpleChord(0, "D"));
		set.push(this.newSimpleChord(1, "G"));
		set.push(this.newSimpleChord(2, "A"));
		return set;
	}

	newSimpleChord(n, note) {
		return new Chord(
			this,
			this.getSymId(n),
			this.getSymNote(note),
			this.getSymNatural(),
			this.getSymMajor(),
			this.getSymNo7());
	}

	isFlat(chord) {
		return chord.half == "flat";
	}

	isSharp(chord) {
		return chord.half == "sharp";
	}

	isNatural(chord) {
		return chord.half == "nohalf";
	}

	isMinor(chord) {
		return chord.triad == "minor";
	}

	isDim(chord) {
		return chord.triad == "dim";
	}

	isMajor(chord) {
		return chord.triad == "major";
	}

	is7(chord) {
		return chord.seventh == "7";
	}

	isMajor7(chord) {
		return chord.seventh == "major7";
	}

	isDim7(chord) {
		return chord.seventh == "dim7";
	}

	save(name) {
		if (!name) {
			return;
		}
		if (this.work.chords.length == 0) {
			return;
		}
		let chord = [].concat(this.work.chords);
		let song = this.findSong(name);
		if (song) {
			song.chords = chord;
		} else {
			song = new Song("", name, chord);
			this.songs.unshift(song);
			this.resetSids();
		}
		let str = this.toString();
		window.localStorage.setItem("janjaka", str);
	}

	findSong(name) {
		for (let song of this.songs) {
			if (song.name == name) {
				return song;
			}
		}
		return null;
	}

	resetSids() {
		for (let i = 0; i < this.songs.length; ++i) {
			if (this.songs[i].sid.startsWith("d")) {
				return;
			}
			this.songs[i].sid = "u" + i;
		}
	}

	select(name) {
		let song = this.findSong(name);
		if (!song) {
			return;
		}
		let chords = [].concat(song.chords);
		this.work = new Song("", song.name, chords);
		return this.work;
	}

	toString() {
		let str = "";
		for (let song of this.songs) {
			if (song.sid.startsWith("d")) {
				continue;
			}
			str += song.toString();
			str += "\n";
		}
		return str;
	}

	add(note, half, triad, seventh) {
		return this.work.add(this, note, half, triad, seventh);
	}

	remove() {
		this.work.remove();
	}
}
