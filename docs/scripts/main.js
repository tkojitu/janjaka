import Container from "./Container.js";
import Janjaka from "./Janjaka.js";
import Player from "./Player.js";

window.addEventListener(
	"load",
	function() {
        let c = new Container();
        c.define(
            "player",
            function(c) {
                return new Player();
            });
		c.define(
			"janjaka",
			function(c) {
				return new Janjaka(c.geti("player"));
			});
		c.geti("janjaka").init();
	});
