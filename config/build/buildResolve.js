function buildResolve(options) {
  const { alias } = options;

  return {
    alias,
    extensions: [".js", ".scss"],
  };
}

module.exports = buildResolve;
