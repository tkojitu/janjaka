import Chord from "./Chord.js";

export default class {
    constructor() {
        this.chords = [];
    }
    add(note, half, triad, seventh) {
        let div = document.getElementById("player");
        let id = "chord" + this.chords.length;
        let chord = new Chord(id, note, half, triad, seventh);
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

    delete() {
        let div = document.getElementById("player");
        if (!div.lastChild) {
            return;
        }
        div.removeChild(div.lastChild);
    }
}
