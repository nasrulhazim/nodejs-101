var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});

	if(request.method == 'GET' && request.url == '/user') {
		response.end('hello user');
	}

	response.end(request.method + ': ' + request.url);
});

server.listen(8000);

console.log("server is running");