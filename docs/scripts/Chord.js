export default class {
	constructor(book, id, note, half, triad, seventh) {
		this.book = book;
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
		return this.book.isFlat(this);
	}

	isSharp() {
		return this.book.isSharp(this);
	}

	isNatural() {
		return this.book.isNatural(this);
	}

	isMinor() {
		return this.book.isMinor(this);
	}

	isDim() {
		return this.book.isDim(this);
	}

	isMajor() {
		return this.book.isMajor(this);
	}

	is7() {
		return this.book.is7(this);
	}

	isMajor7() {
		return this.book.isMajor7(this);
	}

	isDim7() {
		return this.book.isDim7(this);
	}
}
