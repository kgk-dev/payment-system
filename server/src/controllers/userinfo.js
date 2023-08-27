const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const account = require('../services/account')

const get = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const data = await account.get(phoneNumber)
    return res.status(200).json({
      name: data.user.name,
      balance: data.balance,
    })
  },
  500,
)

module.exports = {
  get,
}