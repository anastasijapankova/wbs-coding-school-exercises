// Create an HTTP Server
// Node was designed with back end development needs as a top priority. 
// One of these needs is the ability to create web servers, computer processes that listen for requests 
// from clients and return responses. A Node core module designed to meet these needs is the http module. 
// This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

// The http.createServer() method returns an instance of an http.server. 
// An http.server has a method .listen() which causes the server to “listen” for incoming connections. 
// When we run http.createServer() we pass in a custom callback function (often referred to as the requestListener). 
// This callback function will be triggered once the server is listening and receives a request.

// Let’s break down how the requestListener callback function works:

// The function expects two arguments: a request object and a response object.
// Each time a request to the server is made, Node will invoke the provided requestListener callback function, 
// passing in the request and response objects of the incoming request.
// Request and response objects come with a number of properties and methods of their own, 
// and within the requestListener function, we can access information about the request via the request object passed in.
// The requestListener is responsible for setting the response header and body.
// The requestListener must signal that the interaction is complete by calling the response.end() method.

// const http = require('http');

// let requestListener = (request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('Hello World!\n');
//     response.end();
// };

// const server = http.createServer(requestListener);

// server.listen(3000);

// Let’s walk through the above code:

// We required in the http core module.
// We created a server variable assigned to the return value of the http.createServer() method.
// We invoked http.createServer() with our requestListener callback. This is similar to running the .on() of an 
// EventEmitter: the requestListener will execute whenever an HTTP request is sent to the server on the correct port.
// Within the requestListener callback, we make changes to the response object, response, 
// so that it can send the appropriate information to the client sending the request. 
// The status code 200 means that no errors were encountered. The header communicates that the file type is text, 
// rather than something like audio or compressed data.
// The last line starts the server with the port 3000. Every server on a given machine specifies 
// a unique port so that traffic can be correctly routed.
// You could run the above code on your local machine, and access it by visiting http://localhost:3000/ from your browser. 
// “localhost” is used to refer to the same computer that’s running the current Node process.

// In our example web server, we showed you a handful of the methods available on response objects. 
// Be sure to check out the documentation to learn other methods and properties available on response and request objects.

const http = require('http');
let { requestListener } = require('./callbackFile.js');
const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);