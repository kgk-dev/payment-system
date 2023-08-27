const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const generateOTP = require('../utils/generateOTP')
const generateOTPToken = require('../utils/generateOTPToken')
const generateSignupToken = require('../utils/generateSignupToken')
const userController = require('./users')
const account = require('../services/account')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const otp = generateOTP()
    const token = generateOTPToken(phoneNumber, otp)
    res.cookie('token', token, { httpOnly: true })
    return res.status(200).json({ otp })
  },
  500,
)

const step2 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const token = generateSignupToken(phoneNumber)
    res.cookie('token', token, { httpOnly: true })
    res.status(200).json({ msg: "Successful" })
  },
  500,
)

const step3 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const password = resolve.password(req)
    await account.create(phoneNumber, password)
    return res.status(201).json({ msg: "Success" })
  },
  500,
)

const step4 = userController.create

module.exports = {
  step1,
  step2,
  step3,
  step4,
}