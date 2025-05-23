const path = require("path");
const buildWebpackConfig = require("./config/build/buildWebpackConfig");

const config = (env) => {
  const PORT = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const pagesPath = path.resolve(__dirname, "src", "pages");

  const paths = {
    src: {
      main: path.resolve(__dirname, "src", "main.js"),
      homepage: path.resolve(pagesPath, "homepage", "index.js"),
      about: path.resolve(pagesPath, "about", "about.js"),
      styles: path.resolve(__dirname, "src", "styles.js"),
    },
    build: path.resolve(__dirname, "build"),
    fonts: path.resolve(__dirname, "src", "assets", "fonts"),
  };

  const pages = [
    {
      filename: "index.html",
      template: path.resolve(pagesPath, "homepage", "index.html"),
      chunks: ["styles", "main", "homepage"],
    },
    {
      filename: "about.html",
      template: path.resolve(pagesPath, "about", "about.html"),
      chunks: ["styles", "main", "about"],
    },
  ];
  const options = {
    port: PORT,
    mode,
    paths,
    pages,
    isDev,
  };
  return buildWebpackConfig(options);
};

module.exports = config;
