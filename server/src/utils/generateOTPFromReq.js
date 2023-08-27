const generateOTP = require("./generateOTP");
const generateOTPToken = require("./generateOTPToken");
const resolve = require('./resolve')

module.exports = (req) =>
  generateOTPToken(resolve.phoneNumber(req), generateOTP())