export default class {
	constructor(sid, name, chords) {
		this.sid = sid;
		this.name = name;
		this.chords = chords;
	}

	toString() {
		return name + "\n" + this.toStringChords();
	}

	toStringChords() {
		let ret = "";
		for (let chord of this.chords) {
			ret += chord.toString();
		}
		return ret;
	}
}
