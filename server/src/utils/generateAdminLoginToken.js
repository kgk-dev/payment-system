const jwt = require("jsonwebtoken")

module.exports = (id) =>
  jwt.sign({ id }, process.env.ADMIN_LOGIN_TOKEN)