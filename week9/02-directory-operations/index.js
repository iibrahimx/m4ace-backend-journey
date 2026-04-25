// DIRECTORY OPERATIONS

const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "practice-folder");
const subFolderPath = path.join(folderPath, "texts");

// ========================================
// Task 1. Create directories
// ========================================
fs.mkdirSync(subFolderPath, { recursive: true });
console.log("Directories created successfully.");

// ========================================
// Task 2. Create some files
// ========================================
fs.writeFileSync(path.join(folderPath, "readme.md"), "# Practice Folder");
fs.writeFileSync(path.join(subFolderPath, "notes.txt"), "Some notes here.");
fs.writeFileSync(path.join(subFolderPath, "todo.txt"), "Learn fs module.");
fs.writeFileSync(
  path.join(subFolderPath, "script.js"),
  "console.log('hello');",
);

console.log("Sample files created.");

// ========================================
// Task 3. Read directory contents
// ========================================
const folderContents = fs.readdirSync(folderPath);
console.log("Main folder contents:", folderContents);

const textFolderContents = fs.readdirSync(subFolderPath);
console.log("Texts folder contents:", textFolderContents);

// ========================================
// Task 4. Find files by extension
// ========================================
const txtFiles = textFolderContents.filter(
  (file) => path.extname(file) === ".txt",
);
console.log(".txt files:", txtFiles);

// ========================================
// Task 5. Generate a simple directory tree
// ========================================
function showTree(directory, indent = "") {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    console.log(indent + "- " + item);

    if (stats.isDirectory()) {
      showTree(itemPath, indent + "  ");
    }
  }
}

console.log("Directory tree:");
showTree(folderPath);

// ========================================
// Task 6. Delete directory recursively
// ========================================
fs.rmSync(folderPath, { recursive: true, force: true });
console.log("Practice folder deleted successfully.");
