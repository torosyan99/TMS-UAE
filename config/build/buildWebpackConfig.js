const buildLoaders = require("./buildLoaders");
const buildPlugins = require("./buildPlugins");
const buildDevServer = require("./buildDevServer");
const buildResolve = require("./buildResolve");

function buildWebpackConfig(options) {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.src,
    devtool: isDev && "inline-source-map",
    output: {
      path: paths.build,
      filename: "js/[name].[contenthash:6].js",
      clean: true,
    },
    optimization: {
      runtimeChunk: isDev ? "single" : undefined,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolve(options)
  };
}

module.exports = buildWebpackConfig;
