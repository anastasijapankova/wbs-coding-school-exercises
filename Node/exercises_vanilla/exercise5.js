// Exercise 5 (Help - http https://nodejs.org/api/http.html)

var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://127.0.0.1:80/");


// The code you provided in exercise5.js sets up a basic HTTP server using Node.js. 
// Here's an explanation of what the code does:

// It imports the http module, which is a built-in module in Node.js, using the require function.
// It creates an instance of an HTTP server by calling http.createServer(). 
// This function takes a callback function that gets executed for each incoming HTTP request.
// Inside the callback function, it sets the response headers using response.writeHead(). 
// In this case, it sets the status code to 200 and the Content-Type header to "text/plain".
// It sends the response body using response.end(). The response body in this case is the string "Hello World\n".
// It calls server.listen(80) to start the server and make it listen on port 80. Port 80 is the default port for HTTP traffic.
// Finally, it logs a message to the console indicating that the server is running and accessible at http://127.0.0.1:80/, 
// which is the loopback IP address for the local machine.
// When you run this code in the console, it starts the server and begins listening for incoming HTTP requests on port 80. 
// You can access the server by opening a web browser and navigating to http://127.0.0.1:80/ or http://localhost:80/, 
// which should display the message "Hello World" as the response body.