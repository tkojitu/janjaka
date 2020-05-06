import Chord from "./Chord.js";

export default class {
    constructor() {
        this.chords = [];
    }
    add(note, half, key, seventh) {
        let div = document.getElementById("player");
        let id = "chord" + this.chords.length;
        let chord = new Chord(id, note, half, key, seventh);
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

    newLabel(chord) {
        let elt = document.createElement("label");
        elt.setAttribute("for", chord.id);
        elt.innerHTML = chord.getHTML();
        return elt;
    }
}
