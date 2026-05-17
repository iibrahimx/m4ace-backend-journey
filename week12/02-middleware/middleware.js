const express = require("express");

const app = express();

const PORT = 3000;

// Built-in middleware for JSON
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Request timing middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleTimeString();
  next();
});

// Route-specific authentication middleware
function checkAuth(req, res, next) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return res.status(401).send("Access denied");
  }

  next();
}

// Public route
app.get("/", (req, res) => {
  res.send("Public route");
});

// Protected route
app.get("/dashboard", checkAuth, (req, res) => {
  res.send(`Welcome to dashboard. Request time: ${req.requestTime}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

app.listen(PORT, () => {
  console.log(`Middleware server running on http://localhost:${PORT}`);
});
