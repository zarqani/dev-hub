const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.join(__dirname, "build");
const targetDir = path.join(__dirname, "extension");

// Copy build files to extension directory
fs.copySync(sourceDir, targetDir, { overwrite: true });

// Rename _next directory to assets
fs.moveSync(path.join(targetDir, "_next"), path.join(targetDir, "assets"), {
  overwrite: true,
});

// Update references in HTML files
const htmlFiles = fs
  .readdirSync(targetDir)
  .filter((file) => file.endsWith(".html"));
htmlFiles.forEach((file) => {
  const filePath = path.join(targetDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(/\/_next\//g, "/assets/");
  content = content.replace(/="\/assets\//g, '="./assets/');
  fs.writeFileSync(filePath, content);
});

console.log("Extension directory prepared successfully!");
