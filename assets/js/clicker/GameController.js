function GameController(GameModel, GameView) {
	this.gm = GameModel;
	this.gv = GameView;
}

GameController.prototype.initListeners = function() {
	var listener = document.getElementById('frog');
	listener.onclick = this.userClick;
	//TODO: add listeners for other aspects of the game.
}

GameController.prototype.userClick = function() {
	gm.userIncrement();
	gv.render(this.gm);
}

window.onload = function() {
	var gm = new GameModel();
	var gv = new GameView();
	var gc = new GameController(gm,gv);
	gc.initListeners();
}