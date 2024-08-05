const fs = require("fs-extra");
const path = require("path");
const cheerio = require("cheerio");

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

  // Load the HTML content
  const $ = cheerio.load(content);

  // Extract inline scripts
  $("script:not([src])").each((index, element) => {
    const script = $(element);
    const scriptContent = script.html();
    const scriptFileName = `inline-script-${index}.js`;

    // Write the script content to a new file
    fs.writeFileSync(path.join(targetDir, scriptFileName), scriptContent);

    // Replace the inline script with a reference to the new file
    script.removeAttr("dangerouslysetinnerhtml");
    script.attr("src", `./${scriptFileName}`);
    script.text("");
  });

  // Update asset references
  content = $.html()
    .replace(/\/_next\//g, "/assets/")
    .replace(/="\/assets\//g, '="./assets/');

  fs.writeFileSync(filePath, content);
});

console.log("Extension directory prepared successfully!");
