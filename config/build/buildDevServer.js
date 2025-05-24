function buildDevServer(options) {
  const { port, paths } = options;
  return {
    port,
    hot: true,
    open: true,
    watchFiles: ["src/**/*.html"],
  };
}

module.exports = buildDevServer;
