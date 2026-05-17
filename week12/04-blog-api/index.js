const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory blog data
let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is my first blog post",
  },
];

// GET all posts
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// GET single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.status(200).json(post);
});

// CREATE post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
});

// UPDATE post
app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const { title, content } = req.body;

  if (title) {
    post.title = title;
  }

  if (content) {
    post.content = content;
  }

  res.status(200).json({
    message: "Post updated successfully",
    post,
  });
});

// DELETE post
app.delete("/posts/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));

  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  posts.splice(postIndex, 1);

  res.status(200).json({
    message: "Post deleted successfully",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Blog API running on http://localhost:${PORT}`);
});
