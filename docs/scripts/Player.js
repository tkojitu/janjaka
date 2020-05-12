import Chord from "./Chord.js";

export default class {
	constructor(book, guitar) {
		this.book = book;
		this.guitar = guitar;
	}

	init() {
		this.book.init();
	}

	add(note, half, triad, seventh) {
		let chord = this.book.add(note, half, triad, seventh);
		let div = document.getElementById("player");
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

	addListenerChord(elt, chord) {
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
		this.addListenerChord(elt, chord);
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

	select(name) {
		let div = document.getElementById("player");
		this.clear(div);
		let song = this.book.select(name);
		this.addButtonsSong(div, song);
	}

	clear(elt) {
		while (elt.childNodes.length > 0) {
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
