const path = require("path");
const buildWebpackConfig = require("./config/build/buildWebpackConfig");
const generateEntries = require("./config/build/utils/generateEntries");
const generateHtmls = require("./config/build/utils/generateHtmls");

const config = (env) => {
  const PORT = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const pagesPath = path.resolve(__dirname, "src", "pages");
  
  const paths = {
    src: generateEntries(pagesPath, path.resolve(__dirname, "src", "main.js")),
    build: path.resolve(__dirname, "build"),
    fonts: path.resolve(__dirname, "src", "assets", "fonts"),
  };

  const alias = {
   '@images': path.resolve(__dirname, 'src', 'assets', 'images')
  }

  const pages = generateHtmls(pagesPath)
  

  const options = {
    port: PORT,
    mode,
    paths,
    pages,
    isDev,
    alias
  };
  return buildWebpackConfig(options);
};

module.exports = config;
