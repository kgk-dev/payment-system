const resolve = require('../utils/resolve')
const generateOTP = require('../utils/generateOTP')
const generateOTPToken = require('../utils/generateOTPToken')
const generateLoginToken = require('../utils/generateLoginToken')
const handler = require('../utils/handler')
const unRegisteredUsers = require('../services/unregisterUsers')
const accounts = require('../services/account')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const user = await unRegisteredUsers.retrieveOne(phoneNumber)
    if (user) {
      return res.status(401).json({ message: "Unregistered phone number" })
    }
    const account = await accounts.retrieveOne(phoneNumber)
    if (account) {
      const otp = generateOTP()
      const token = generateOTPToken(phoneNumber, otp)
      res.cookie('token', token, { httpOnly: true })
      return res.status(200).json({ otp })
    }
    return res.status(40).json({ message: "Invalid phone number" })
  },
  500,
)

const step2 = handler(
  async (req, res) => {
    const user = await accounts.retrieveOne(resolve.phoneNumber(req))
    const token = generateLoginToken(resolve.phoneNumber(req))
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({
      name: user.name,
      balance: user.balance,
    })
  },
  500,
)

module.exports = {
  step1,
  step2,
}