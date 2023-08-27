const jwt = require("jsonwebtoken")

module.exports = (phoneNumber) =>
  jwt.sign({ id: phoneNumber }, process.env.SIGNUP_TOKEN)