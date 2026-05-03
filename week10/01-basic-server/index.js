// BASIC SERVER

const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello, this is my basic HTTP server!");
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
