/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Gulnar Musayeva Student ID: 155988231 Date: 05/24/2024
*
********************************************************************************/ 

// Define the arrays with server verbs, paths, and responses
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This course name is WEB700. This assignment was prepared by Gulnar Musayeva",
  "gmusayeva@myseneca.ca\nGulnar Musayeva",
  "Hello, User Logged In",
  "Main Panel",
  "Logout Complete. Goodbye"
];

// Define the getRandomInt utility function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Define the httpRequest function
function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually test the httpRequest function with different combinations
console.log(httpRequest("GET", "/"));           // Expected: "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about"));      // Expected: "200: This course name is WEB700. This assignment was prepared by Gulnar Musayeva"
console.log(httpRequest("GET", "/contact"));    // Expected: "200: gmusayeva@myseneca.ca\nGulnar Musayeva"
console.log(httpRequest("POST", "/login"));     // Expected: "200: Hello, User Logged In"
console.log(httpRequest("GET", "/panel"));      // Expected: "200: Main Panel"
console.log(httpRequest("POST", "/logout"));    // Expected: "200: Logout Complete. Goodbye"
console.log(httpRequest("GET", "/login"));      // Expected: "404: Unable to process GET request for /login"
console.log(httpRequest("POST", "/contact"));   // Expected: "404: Unable to process POST request for /contact"
console.log(httpRequest("PUT", "/"));           // Expected: "404: Unable to process PUT request for /"

// Define the automateTests function
function automateTests() {
  // Define test arrays
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
  // Define the randomRequest function
  function randomRequest() {
    // Declare random variables
    const randVerb = testVerbs[getRandomInt(testVerbs.length)];
    const randPath = testPaths[getRandomInt(testPaths.length)];
    
    // Invoke the httpRequest function with random values and log the result
    console.log(httpRequest(randVerb, randPath));
  }

  // Use setInterval to execute randomRequest every 1 second
  setInterval(randomRequest, 1000);
}

// Start the automated tests
automateTests();

// Create an HTTP server that listens to server ports and gives a response
const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const response = httpRequest(method, url);

  res.writeHead(response.startsWith("200") ? 200 : 404, { 'Content-Type': 'text/plain' });
  res.end(response);
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


// The End...