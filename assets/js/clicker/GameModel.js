function GameModel(version = 0.1, frogs = 0, clickers = 0) {
	this.version = version;
	this.frogs = frogs;
	this.clickers = clickers;
}

GameModel.prototype.dumpData = function() {
	return {
		//TODO: add important needed data to data dump.
		'WednesdayGame': {
			version: this.version,
			frogs: this.frogs,
			clickers: this.clickers,
		}
	}
};

GameModel.prototype.userIncrement = function() {
	this.frogs += 1;
};

GameModel.prototype.update = function() {
	//TODO: Call from controller every X seconds and add to frogs based on generators.
};