const fs = require("fs");
const path = require("path");

function generateEntries(pagesPath, main) {
  const entries = {
    main,
  };
  fs.readdirSync(pagesPath, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      const name = dirent.name;
      const dirPath = path.join(pagesPath, name);
      const files = fs.readdirSync(dirPath);
      const entryFile = files.find(
        (f) => /^index\.js$|^.+\.js$/.test(f) && !f.includes(".test.")
      );
      if (entryFile) {
        entries[name] = path.join(dirPath, entryFile);
      }
    }
  });
  return entries;
}

module.exports = generateEntries;
