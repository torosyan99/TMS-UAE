const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function buildLoaders(options) {
  const { isDev } = options;
  const scssLoader = {
    test: /\.s[ca]ss$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      !isDev && "postcss-loader",
      "sass-loader",
    ],
  };

  const fontsLoader = {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name][ext]",
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: "images/sprite.svg",
        },
      },
    ],
  };

  const imageLoader = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name][ext][query]", // 👈 путь и имя файлов в dist/
    },
  };

  return [scssLoader, fontsLoader, svgLoader, imageLoader];
}

module.exports = buildLoaders;
