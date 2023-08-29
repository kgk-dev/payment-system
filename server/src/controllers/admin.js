const services = require('../services/admin')
const resolve = require('../utils/resolve')
const handler = require('../utils/handler')
const generateAdminLoginToken = require('../utils/generateAdminLoginToken')

const getAdminInfo = handler(
  async (req, res) => {
    return res.status(200).json({ msg: "Welcome You" })
  },
  500,
)

const getAdmin = handler(
  async (req, res) => {
    const userId = req.body['userId']
    const password = resolve.password(req)
    console.log(userId, password)
    const isAdmin = await services.getById(userId)
    console.log("admin password", isAdmin)
    if (isAdmin && isAdmin.password === password) {
      res.cookie('adminToken',
        generateAdminLoginToken(userId),
        { httpOnly: true }
      )
      return res.status(200).json({ msg: "You gain access" })
    }
    return res.status(401).json({ msg: "Oh sorry you are restricted" })
  },
  500,
)

const getTransactions = handler(
  async (req, res) => {
    const transactions = await services.getTransactions()
    return res.status(200).json({ transactions })
  },
  500,
)

module.exports = {
  getAdmin,
  getAdminInfo,
  getTransactions,
}