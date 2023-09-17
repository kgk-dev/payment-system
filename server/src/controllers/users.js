const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const builder = require('../utils/builder')
const users = require('../services/users')
const transaction = require('../services/transaction')
const feedbacks = require('../services/feedbacks')

const create = handler(
  async (req, res) => {
    await users.create(builder.userModel(resolve.userInfo(req)))
    return res.status(201).send()
  },
  500,
)

const getUsers = handler(
  async (req, res) => {
    const allUsers = await users.retrieveAll(true)
    return res.status(200).json({ users: allUsers })
  },
  500,
)

const getUserById = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const user = await users.retrieveOne(phoneNumber, true)
    return res.status(200).json({ user })
  },
  500,
)

const deleteOne = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const ok = await users.deleteOne(phoneNumber)
    if (ok)
      return res.status(204)
    return res.status(401).json({ message: "User Not Found" })
  },
  500,
)

const getTransactionsById = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const transactions = await transaction.retrieveOne(phoneNumber)
    return res.status(200).json({
      sent: transactions.sentTransactions.reverse(),
      received: transactions.receivedTransactions.reverse(),
    })
  },
  500,
)

const logout = async (req, res) => {
  res.clearCookie('token')
  return res.status(200).json({ message: "Logout" })
}

const sentFeedback = handler(
  async (req, res) => {
    const name = req.body['name']
    const feedback = req.body['feedback']
    await feedbacks.create(name, feedback)
    return res.status(200).send()
  },
  500,
)


module.exports = {
  create,
  getUsers,
  getUserById,
  getTransactionsById,
  deleteOne,
  logout,
  sentFeedback,
}