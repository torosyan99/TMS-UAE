function buildDevServer(options) {
  const { port, paths } = options;
  return {
    port,
    hot: true,
    open: true,
    static: {
      directory: paths.build,
    },
  };
}

module.exports = buildDevServer;
