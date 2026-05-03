// POST REQUESTS

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/data") {
    let body = "";

    // Collect incoming data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When data is fully received
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);

        // Validation
        if (!parsedData.name || !parsedData.age) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Name and age are required" }),
          );
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Data received successfully",
            data: parsedData,
          }),
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
