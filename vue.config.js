module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/jwt-test/" // note the trailing slash
      : "/",
}
