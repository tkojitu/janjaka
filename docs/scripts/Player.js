import Chord from "./Chord.js";

export default class {
	constructor(book, guitar) {
		this.book = book;
		this.guitar = guitar;
		this.chords = [];
	}

	init() {
		this.book.init();
	}

	add(note, half, triad, seventh) {
		let div = document.getElementById("player");
		let id = "chord" + this.chords.length;
		let chord = new Chord(this.book, id, note, half, triad, seventh);
		this.chords.push(chord);
		this.addButtonPair(div, chord);
	}

	addButtonPair(div, chord) {
		div.appendChild(this.newButton(chord));
		div.appendChild(this.newLabel(chord));
	}
	
	newButton(chord) {
		let elt = document.createElement("input");
		elt.setAttribute("type", "button");
		elt.id = chord.id;
		return elt;
	}

	addListenerChord(chord, elt) {
		let me = this;
		elt.addEventListener(
			"pointerdown",
			function(ev) {
				me.onPointerDown(chord);
			});
		elt.addEventListener(
			"pointerup",
			function(ev) {
				me.onPointerUp(chord);
			});
	}

	newLabel(chord) {
		let elt = document.createElement("label");
		elt.setAttribute("for", chord.id);
		elt.innerHTML = chord.getHTML();
		this.addListenerChord(chord, elt);
		return elt;
	}

	delete() {
		let div = document.getElementById("player");
		if (!div.lastChild) {
			return;
		}
		div.removeChild(div.lastChild);
		if (!div.lastChild) {
			return;
		}
		div.removeChild(div.lastChild);
	}

	onPointerDown(chord) {
		this.guitar.onPointerDown(chord);
	}

	onPointerUp(chord) {
		this.guitar.onPointerUp(chord);
	}

	load(sid) {
		let div = document.getElementById("player");
		this.clear(div);
		let song = this.book.findSong(sid);
		this.chords = song.chords;
		this.addButtonsSong(div, song);
	}

	clear(div) {
		while (div.childNodes.length > 0) {
			this.delete();
		}
	}

	addButtonsSong(div, song) {
		for (let i = 0; i < song.chords.length; ++i) {
			let chord = song.chords[i];
			this.addButtonPair(div, chord);
		}
	}

	save() {
		let elt = document.getElementById("songName");
		this.book.save(elt.value);
	}
}
