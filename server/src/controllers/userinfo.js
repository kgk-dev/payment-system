const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const accounts = require('../services/account')

const get = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const account = await accounts.retrieveOne(phoneNumber)
    if (account)
      return res.status(200).json({
        phoneNumber: account.id,
        name: account.user.name,
        balance: account.balance,
      })
    return res.status(401).json({ message: "User Not Found" })
  },
  500,
)

module.exports = {
  get,
}