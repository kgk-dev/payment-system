const resolve = require('../utils/resolve')
const generateOTP = require('../utils/generateOTP')
const generateOTPToken = require('../utils/generateOTPToken')
const generateLoginToken = require('../utils/generateLoginToken')
const handler = require('../utils/handler')
const account = require('../services/account')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const value = await account.get(phoneNumber)
    if (value) {
      const otp = generateOTP()
      const token = generateOTPToken(phoneNumber, otp)
      res.cookie('token', token, { httpOnly: true })
      return res.status(200).json({ otp })
    }
    return res.status(401).josn({ msg: "Incorrect phone number" })
  },
  500,
)

const step2 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const data = await account.get(phoneNumber)
    const token = generateLoginToken(resolve.phoneNumber(req))
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({
      name: data.user.name,
      balance: data.balance,
    })
  },
  500,
)

module.exports = {
  step1,
  step2,
}