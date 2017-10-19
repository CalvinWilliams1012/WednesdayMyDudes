
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