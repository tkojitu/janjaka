export default class {
	constructor(player) {
		this.player = player;
	}

	init() {
		this.player.init();
		this.setupBook();
		this.initListeners();
	}

	initListeners() {
		this.addListenerToAdd();
		this.addListenerToDelete();
		this.addListenerToSelect();
		this.addListenerToSave();
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
		let rs = document.getElementsByName("triads");
		return this.readRadio(rs);
	}

	readSeventh() {
		let rs = document.getElementsByName("seventh");
		return this.readRadio(rs);
	}

	 onClickDelete() {
		 this.player.delete();
	 }

	 addListenerToSelect() {
		let me = this;
		let btn = document.getElementById("select");
		btn.addEventListener(
			"click",
			function(ev) {
				me.onClickSelect();
			});
	 }

	 onClickSelect() {
		 let name = this.findSelectedSong();
		 this.player.select(name);
	 }

	 findSelectedSong() {
		let sel = document.getElementById("book");
		for (let opt of sel.childNodes) {
			if (opt.selected) {
				return opt.innerHTML;
			}
		}
		return null;
	 }

	 setupBook() {
		 let sel = document.getElementById("book");
		 for (let song of this.player.book.songs) {
			 let opt = this.newOption(song);
			 sel.appendChild(opt);
		 }
	 }

	 newOption(song) {
		let opt = document.createElement("option");
		opt.value = song.sid;
		opt.innerHTML = song.name;
		return opt;
	}

	addListenerToSave() {
		let me = this;
		let btn = document.getElementById("save");
		btn.addEventListener(
			"click",
			function(ev) {
				me.onClickSave();
			});
	 }

	 onClickSave() {
		 this.player.save();
		 this.clearBook();
		 this.setupBook();
	 }

	 clearBook() {
		let elt = document.getElementById("book");
		while (elt.childNodes.length > 0) {
			elt.removeChild(elt.lastChild);
		}
	}
}
