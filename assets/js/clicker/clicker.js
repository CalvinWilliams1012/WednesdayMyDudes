// Reads the Wednesdaydata cookie, if it exists load that game, if it doesnt new game!
//var data = read_cookie();
var game = new Game(1,100,2)
run(game);
/*
if (data && data !== 'null' && data !== 'undefined') {
	game = new Game(data.version, data.frogs, data.clickers);
	run(game);
} else {
	game = new Game();
	run(game);
}
*/

function save(){
	make_cookie(game.dumpData());
}

// Every 1000ms the update function is called in the game.
function run(game) {
	setInterval(game.update, 1000);
}

// Not my code, from https://stackoverflow.com/questions/11344531/pure-javascript-store-object-in-cookie for storing cookies, same with the read_cookie function.
function make_cookie(data) {
	var cookie = ["Wednesdaydata", '=', JSON.stringify(data), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
	document.cookie = cookie;
}

function read_cookie() {
	var result = document.cookie.match(new RegExp("Wednesdaydata" + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}