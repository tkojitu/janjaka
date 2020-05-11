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
		this.addListenerToLoad();
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

	 addListenerToLoad() {
		let me = this;
		let btn = document.getElementById("load");
		btn.addEventListener(
			"click",
			function(ev) {
				me.onClickLoad();
			});
	 }

	 onClickLoad() {
		 let opt = this.findSelectedPreset();
		 this.player.load(opt);
	 }

	 findSelectedPreset() {
		let sel = document.getElementById("book");
		for (let opt of sel.childNodes) {
			if (opt.selected) {
				return opt.value;
			}
		}
		return null;
	 }

	 setupBook() {
		 let sel = document.getElementById("book");
		 for (let preset of this.player.book.songs) {
			 let opt = this.newOption(preset);
			 sel.appendChild(opt);
		 }
	 }

	 newOption(preset) {
		let opt = document.createElement("option");
		opt.value = preset.pid;
		opt.innerHTML = preset.name;
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
	 }
}
