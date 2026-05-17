// BASIC SERVER

const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact page");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
