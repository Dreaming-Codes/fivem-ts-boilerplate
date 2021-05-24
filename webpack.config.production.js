const baseconfig = require("./webpack.config.base.js")

baseconfig[0]["mode"] = "production"
baseconfig[1]["mode"] = "production"

module.exports = baseconfig
