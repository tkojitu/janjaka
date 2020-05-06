export default class {
    constructor(id, note, half, key, seventh) {
        this.id = id;
        this.note = note;
        this.half = half;
        this.key = key;
        this.seventh = seventh;
    }

    getHTML() {
        return this.getTextNote() + this.getTextHalf() + this.getTextKey() + this.getTextSeventh();
    }
    
    getTextNote() {
        return this.note.charAt(this.note.length - 1);
    }

    getTextHalf() {
        switch (this.half) {
        case "flat":
            return "<sub>&#x266E</sub>";
        case "sharp":
            return "<sub>&#x266F;</sub>";
        default:
            return "";
        }
    }

    getTextKey() {
        return (this.key == "minor") ? "m" : "";
    }

    getTextSeventh() {
        switch (this.seventh) {
        case "dim3":
            return "dim";
        case "7":
            return "7";
        case "major7":
            return "M7";
        case "dim7":
            return "dim7";
        default:
            return "";
        }
    }
}
