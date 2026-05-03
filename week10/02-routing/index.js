// ROUTING

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Home route
  if (path === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to Home Page");
  }

  // About route
  if (path === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("About Page");
  }

  // Route with query string
  if (path === "/user" && method === "GET") {
    const name = parsedUrl.query.name || "Guest";
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(`Hello, ${name}`);
  }

  // Not Found
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
