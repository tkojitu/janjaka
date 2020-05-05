export default class {
    init() {
        this.initListeners();
        this.initCanvas();
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

    initCanvas() {
        let canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth - 30;
        let editor = document.getElementById("editor");
        canvas.height = window.innerHeight - editor.offsetHeight - 30;
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
         return this.readRadios(rs);
     }

     readRadio(radios) {
        for (let r of rs) {
            if (r.checked) {
                return r.id;
            }
        }
        return null;
    }

     readHalf() {
        let rs = document.getElementsByName("halfs");
        return this.readRadios(rs);
    }

    readKey() {
        let rs = document.getElementsByName("keys");
        return this.readRadios(rs);
    }

    readSeventh() {
        let rs = document.getElementsByName("seventh");
        return this.readRadios(rs);
    }

     onClickDelete() {
     }
}
