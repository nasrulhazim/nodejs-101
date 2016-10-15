var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end(request.method + ': ' + request.url);
});

server.listen(8000);

console.log("server is running");