const baseconfig = require("./webpack.config.base.js")

baseconfig[0]["mode"] = "development"
baseconfig[1]["mode"] = "development"

baseconfig[0]["devtool"] = "inline-source-map"
baseconfig[1]["devtool"] = "inline-source-map"

module.exports = baseconfig
