export default class {
	constructor(pid, name, chords) {
		this.pid = pid;
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
