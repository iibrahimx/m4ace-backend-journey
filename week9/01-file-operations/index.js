//FILE OPERATIONS BASICS

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "notes.txt");
const copiedFilePath = path.join(__dirname, "notes-copy.txt");
const renamedFilePath = path.join(__dirname, "renamed-notes.txt");

// ========================================
// Task 1. Write to a file
// ========================================
fs.writeFileSync(
  filePath,
  "Test, this is a sample text in my newly created file.",
);

console.log("File created successfully.");

// ========================================
// Task 2. Check if file exists
// ========================================
if (fs.existsSync(filePath)) {
  console.log("notes.txt exists.");
}

// ========================================
// Task 3. Read the file
// ========================================
const content = fs.readFileSync(filePath, "utf-8");
console.log("File content:", content);

// ========================================
// Task 4. Copy the file
// ========================================
fs.copyFileSync(filePath, copiedFilePath);
console.log("File copied successfully.");

// ========================================
// Task 5. Rename the copied file
// ========================================
fs.renameSync(copiedFilePath, renamedFilePath);
console.log("Copied file renamed successfully.");

// ========================================
// Task 6. Get file statistics
// ========================================
const stats = fs.statSync(filePath);
console.log("File size:", stats.size, "bytes");
console.log("Is file:", stats.isFile());

// ========================================
// Task 7. Delete renamed file
// ========================================
fs.unlinkSync(renamedFilePath);
console.log("Renamed file deleted successfully.");
