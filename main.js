// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello 1.0\n");
});

// listen on localhost:80
server.listen(80);
console.log("Server listening at http://127.0.0.1:80/");
