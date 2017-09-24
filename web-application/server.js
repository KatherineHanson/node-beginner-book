'use strict';

// FINAL CODE FOR CREATING A SERVER
// AND MESSAGE OUTPUT
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    var content = route(handle, pathname);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;

// FIRST SET OF CODE FOR CREATING A SERVER
// AND MESSAGE OUTPUT
// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);

// REFACTOR OF createServer function
// function onRequest(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }
//
// http.createServer(onRequest).listen(8888);

// SECOND SET OF CODE FOR CREATING A SERVER
// var http = require('http');
//
// var server = http.createServer();
// server.listen(8888);

// SECOND SET OF CODE FOR MESSAGE OUTPUT
// function say(word) {
//   console.log(word);
// }
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, 'Hello');

// THIRD SET OF CODE FOR MESSAGE OUTPUT
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(function(word){console.log(word);}, 'Hello');
