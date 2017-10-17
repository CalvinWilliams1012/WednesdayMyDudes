var GameModel = function GameModel(version = 0.1, frogs = 0,clickers = 0){
	this.version = version;
	this.frogs = frogs;
	this.clickers = clickers;

	this.dumpData = function(){
		return {
			//TODO: add important needed data to data dump.
			'WednesdayGame' : {
				version: this.version,
				frogs: this.frogs,
				clickers: this.clickers,
			}
		}
	};

}