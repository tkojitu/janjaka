export default class {
    constructor(player) {
        this.player = player;
    }

    init() {
        this.initListeners();
    }

    initListeners() {
        this.addListenerToAdd();
        this.addListenerToDelete();
    }

    addListenerToAdd() {
        let me = this;
        let btn = document.getElementById("add");
        btn.addEventListener(
            "click",
            function(ev) {
                me.onClickAdd();
            });
    }

    addListenerToDelete() {
        let me = this;
        let btn = document.getElementById("delete");
        btn.addEventListener(
            "click",
            function(ev) {
                me.onClickDelete();
            });
    }

     onClickAdd() {
         let note = this.readNote();
         let half = this.readHalf();
         let key = this.readKey();
         let seventh = this.readSeventh();
         this.player.add(note, half, key, seventh);
     }

     readNote() {
         let rs = document.getElementsByName("notes");
         return this.readRadio(rs);
     }

     readRadio(radios) {
        for (let r of radios) {
            if (r.checked) {
                return r.id;
            }
        }
        return null;
    }

     readHalf() {
        let rs = document.getElementsByName("halfs");
        return this.readRadio(rs);
    }

    readKey() {
        let rs = document.getElementsByName("keys");
        return this.readRadio(rs);
    }

    readSeventh() {
        let rs = document.getElementsByName("seventh");
        return this.readRadio(rs);
    }

     onClickDelete() {
         this.player.delete();
     }
}
