function Game(version = 0.1, frogs = 0,clickers = 0){
	this.version = version;
	this.frogs = frogs;
	this.clickers = clickers;

	this.update = function(){
		//TODO: update function based on generators.
		this.frogs+=1;
		console.log(this.frogs);

	};

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