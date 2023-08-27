const jwt = require("jsonwebtoken")

module.exports = (phoneNumber, otp) => jwt.sign({ id: phoneNumber }, otp)