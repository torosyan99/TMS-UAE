const path = require("path");
const fs = require('fs')

function generateHtmls(pagesPath) {
  const result = [];
  fs.readdirSync(pagesPath, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      const fileName = dirent.name;
      const dirPath = path.join(pagesPath, fileName);

      result.push({
        template: path.resolve(dirPath, "index.html"),
        filename: `${fileName == "homepage" ? "index" :  fileName}.html`,
        chunks: ["main", fileName],
      });
    }
  });
  return result;
}

module.exports = generateHtmls;
