import Chord from "./Chord.js";
import Preset from "./Preset.js";

export default class {
	constructor() {
		this.songs = [];
	}

	init() {
		this.songs = this.getDefault();
	}

	getDefault() {
		let sets = [];
		sets.push(new Preset("d" + 0, "C F G", this.newCFG()));
		sets.push(new Preset("d" + 1, "D G A", this.newDGA()));
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
	}

	findPreset(pid) {
		for (let song of this.songs) {
			if (song.pid == pid) {
				return song;
			}
		}
		return null;
	}
}
