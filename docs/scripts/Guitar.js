import Hole from "./Hole.js";

export default class {
	constructor() {
        this.ax = new AudioContext();
        this.sounder = null;
	}

	onPointerDown(chord) {
        if (this.sounder) {
            this.sounder.stop();
            this.sounder = null;
        }
		let root = this.getRootNumber(chord);
		let notes = this.getTriad(chord, root);
        this.addSeventh(chord, notes);
        this.sounder = new Hole(this.ax, notes);
        this.sounder.start();
	}

	getRootNumber(chord) {
		let name = chord.getName();
		let n = this.noteNameToNumber(name);
		if (chord.isFlat()) {
			return n - 1;
		} else if (chord.isSharp()) {
			return n + 1;
		} else {
			return n;
		}
	}

	noteNameToNumber(name) {
		switch (name) {
		case "C":
			return 60;
		case "D":
			return 62;
		case "E":
			return 64
		case "F":
			return 65;
		case "G":
			return 67;
		case "A":
			return 69;
		case "B":
			return 71
		default:
			return;
		}
	}

	getTriad(chord, root) {
		if (chord.isMinor()) {
			return [root, root + 3, root + 7];
		} else if (chord.isDim()) {
			return [root, root + 3, root + 6];
		} else {
			return [root, root + 4, root + 7];
		}
	}

	addSeventh(chord, triad) {
		if (chord.is7()) {
			triad.push(triad[0] + 10);
		} else if (chord.isMajor7()) {
			triad.push(triad[0] + 11);
		} else if (chord.isDim7()) {
			triad.push(triad[0] + 9);
		}
	}

	onPointerUp(chord) {
        this.sounder.stop();
    }
}
