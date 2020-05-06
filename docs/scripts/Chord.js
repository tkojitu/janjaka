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
        return this.note.charAt(this.note.length - 1);
    }

    getHTMLHalf() {
        switch (this.half) {
        case "flat":
            return "<sub>&#x266E</sub>";
        case "sharp":
            return "<sub>&#x266F;</sub>";
        default:
            return "";
        }
    }

    getHTMLTriad() {
        switch (this.triad) {
        case "minor":
            return "m";
        case "dim":
            return "dim";
        default:
            return "";
        }
    }

    getHTMLSeventh() {
        switch (this.seventh) {
        case "7":
            return "7";
        case "major7":
            return "M7";
        case "dim7":
            if (this.triad == "dim") {
                return "7";
            } else {
                return "dim7";
            }
        default:
            return "";
        }
    }
}
