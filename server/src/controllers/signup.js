const bcrypt = require('bcrypt')
const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const generateOTP = require('../utils/generateOTP')
const generateOTPToken = require('../utils/generateOTPToken')
const generateSignupToken = require('../utils/generateSignupToken')
const users = require('./users')
const account = require('../services/account')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const user = await account.retrieveOne(phoneNumber)
    if (user) {
      return res.status(400).json({ message: `${phoneNumber} is regeistered` })
    }
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
    return res.status(201).send()
  },
  500,
)

const step3 = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const password = resolve.password(req)
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).send()
      }
      await account.create(phoneNumber, hash)
      return res.status(201).send()
    })
  },
  500,
)

const step4 = users.create

module.exports = {
  step1,
  step2,
  step3,
  step4,
}