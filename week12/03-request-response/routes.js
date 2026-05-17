const express = require("express");

const app = express();

const PORT = 3000;

// Middleware for JSON body parsing
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Request & Response practice");
});

// Route parameters
app.get("/users/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Query parameters
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;

  res.send(`Search keyword: ${keyword}`);
});

// POST request with body data
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.json({
    message: "Login data received",
    username,
    password,
  });
});

// Custom headers
app.get("/headers", (req, res) => {
  res.set("X-App-Name", "M4ACE Backend Journey");

  res.send("Custom header set");
});

// Cookies
app.get("/cookies", (req, res) => {
  res.cookie("username", "Ibrahim");

  res.send("Cookie has been set");
});

app.listen(PORT, () => {
  console.log(`Request/Response server running on http://localhost:${PORT}`);
});
