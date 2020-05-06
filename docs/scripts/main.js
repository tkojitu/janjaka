import Container from "./Container.js";
import Guitar from "./Guitar.js";
import Janjaka from "./Janjaka.js";
import Player from "./Player.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"guitar",
			function(c) {
				return new Guitar();
			});
		c.define(
			"player",
			function(c) {
				return new Player(c.geti("guitar"));
			});
		c.define(
			"janjaka",
			function(c) {
				return new Janjaka(c.geti("player"));
			});
		c.geti("janjaka").init();
	});
