// var http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.end('Hi there\n')
// }).listen(process.env.PORT);

var express = require('express');

var app = express();
var port = int(process.env.PORT) || 9000;

app.get('/', function(request, response) {
    response.send('Hi there.');
});

// app.listen(port, function(err){
//     console.log('Running server on port ' + port);
// });