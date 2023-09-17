const admin = require('../services/admin.js')
const transaction = require('../services/transaction.js')
const resolve = require('../utils/resolve')
const handler = require('../utils/handler')
const generateAdminLoginToken = require('../utils/generateAdminLoginToken')
const account = require('../services/account')
const feedbacks = require('../services/feedbacks')
const users = require('../services/users')

const login = handler(
  async (req, res) => {
    const adminId = req.body['adminId']
    const password = resolve.password(req)
    const isAdmin = await admin.retrieve(adminId)
    if (isAdmin && isAdmin.password === password) {
      res.cookie(
        'adminToken',
        generateAdminLoginToken(adminId),
        { httpOnly: true },
      )
      return res.status(200).json({ message: "You gain access" })
    }
    return res.status(401).json({ message: "Oh sorry you are restricted" })
  },
  500,
)

const logout = async (req, res) => {
  res.clearCookie('adminToken')
  return res.status(200).json({ message: "Logout" })
}

const getTransactions = handler(
  async (req, res) => {
    const transactions = await transaction.retrieveAll()
    return res.status(200).json({ transactions })
  },
  500,
)

const getAdminInfo = handler(
  async (req, res) => {
    const adminId = req.body['adminId']
    const { id } = await admin.retrieve(adminId)
    return res.status(200).json({ id })
  },
  500,
)

const getTransactionById = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const sent = req.body['sent']
    const received = req.body['received']
    const transactions = await transaction.retrieveOne(phoneNumber)
    if (sent && !received) {
      return res.status(200).json({
        sent: transactions.sentTransactions,
        received: [],
      })
    }
    if (received && !sent) {
      return res.status(200).json({
        sent: [],
        received: transactions.receivedTransactions,
      })
    }
    return res.status(200).json({
      sent: transactions.sentTransactions,
      received: transactions.receivedTransactions,
    })
  },
  500,
)

const getUnregisteredUsers = handler(
  async (req, res) => {
    const users = await admin.getUnregisteredUsers()
    return res.status(200).json(users.map((user) => user.user))
  },
  500,
)

const getUserDetails = handler(
  async (req, res) => {
    const phoneNumber = req.params['userId']
    const user = await admin.getUserDetails(phoneNumber)
    return res.status(200).json({
      name: user.name,
      gender: user.gender,
      address: user.address,
      phoneNumber: phoneNumber,
      state: user.state,
      district: user.district,
      registerNumber: user.registerNumber,
      nrcFront: user.photo.front,
      nrcBack: user.photo.back,
    })
  },
  500,
)

const acceptUser = handler(
  async (req, res) => {
    const phoneNumber = req.params['userId']
    await admin.appectUser(phoneNumber)
    return res.status(202).send()
  },
  500,
)

const rejectUser = handler(
  async (req, res) => {
    const phoneNumber = req.params['userId']
    await admin.rejectUser(phoneNumber)
    return res.status(202).send()
  },
  500,
)

const searchUser = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const user = await account.retrieveOne(phoneNumber)
    if (user)
      return res.status(200).json({ user })
    return res.state(400).jons({ message: "User Not Found" })
  },
  500,
)

const updateByUserId = handler(
  async (req, res) => {
    const phoneNumber = req.params['userId']
    const password = req.body['password']
    const balance = req.body['balance']
    console.log("user id: ", password, balance)
    if (password)
      await account.updatePassword(phoneNumber, password)
    if (balance)
      await account.updateBalance(phoneNumber, balance)
    return res.status(200).send()
  },
  500,
)

const deleteByUserId = handler(
  async (req, res) => {
    const phoneNumber = req.params['userId']
    console.log(phoneNumber)
    await users.deleteOne(phoneNumber)
    return res.status(200).send()
  },
  500,
)

const getFeedbacks = handler(
  async (req, res) => {
    const allFeedbacks = await feedbacks.retrieveAll()
    return res.status(200).json({ feedbacks: allFeedbacks })
  },
  500,
)

const deleteFeedbacks = handler(
  async (req, res) => {
    const id = Number(req.params['id'])
    await feedbacks.deleteOne(id)
    return res.status(200).send()
  },
  500,
)

module.exports = {
  login,
  logout,
  getAdminInfo,
  getUserDetails,
  getTransactions,
  getFeedbacks,
  getTransactionById,
  getUnregisteredUsers,
  acceptUser,
  rejectUser,
  searchUser,
  updateByUserId,
  deleteFeedbacks,
  deleteByUserId,
}