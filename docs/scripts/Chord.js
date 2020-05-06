export default class {
	constructor(id, note, half, triad, seventh) {
		this.id = id;
		this.note = note;
		this.half = half;
		this.triad = triad;
		this.seventh = seventh;
	}

	getHTML() {
		return this.getHTMLNote() + this.getHTMLHalf() + this.getHTMLTriad() + this.getHTMLSeventh();
	}
	
	getHTMLNote() {
		return this.getName();
	}

	getHTMLHalf() {
		if (this.isFlat()) {
			return "<sub>&#x266E</sub>";
		} else if (this.isSharp()) {
			return "<sub>&#x266F;</sub>";
		} else {
			return "";
		}
	}

	getHTMLTriad() {
		if (this.isMinor()) {
			return "m";
		} else if (this.isDim()) {
			return "dim";
		} else {
			return "";
		}
	}

	getHTMLSeventh() {
		if (this.is7()) {
			return "7";
		} else if (this.isMajor7()) {
			return "M7";
		} else if (this.isDim7()) {
			if (this.isDim()) {
				return "7";
			} else {
				return "dim7";
			}
		} else {
			return "";
		}
	}

	getName() {
		return this.note.charAt(this.note.length - 1);
	}

	isFlat() {
		return this.half == "flat";
	}

	isSharp() {
		return this.half == "sharp";
	}

	isNatural() {
		return !this.isFlat() && !this.isSharp();
	}

	isMinor() {
		return this.triad == "minor";
	}

	isDim() {
		return this.triad == "dim";
	}

	isMajor() {
		return !this.isMinor() && !this.isDim();
	}

	is7() {
		return this.seventh == "7";
	}

	isMajor7() {
		return this.seventh == "major7";
	}

	isDim7() {
		return this.seventh == "dim7";
	}
}
