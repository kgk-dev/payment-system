const bcrypt = require("bcrypt")
const transactions = require('../services/transaction')
const accounts = require('../services/account')
const resolve = require('../utils/resolve')
const handler = require('../utils/handler')
const generateTransactionId = require('../utils/generateTransactionId')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = req.body['receiver']
    accounts.retrieveOne(phoneNumber).then((values) => {
      if (values)
        return res.status(200).json({ msg: "Access gain" })
      return res.status(401).json({ msg: "Access denied" })
    })
  },
  500,
)

const step2 = handler(
  async (req, res) => {
    const password = resolve.password(req)
    const senderId = resolve.phoneNumber(req)
    const sender = await accounts.retrieveOne(senderId)
    bcrypt.compare(password, sender.password, async (err, same) => {
      console.log("p1: ", sender.password, "p2: ", password, same)
      if (!same) {
        return res.status(401).json({ msg: "Incorrect password" })
      }
      const transferData = req.body['transferData']
      const receiverId = transferData.receiver
      const receiver = await accounts.retrieveOne(receiverId)
      const amount = Number(transferData.amount)
      const date = new Date().toISOString()
      const senderName = sender.user.name
      const receiverName = receiver.user.name
      await transactions.create({
        id: generateTransactionId({
          senderId,
          receiverId,
          amount,
          date,
        }),
        amount,
        date,
        senderId,
        receiverId,
        senderName,
        receiverName,
      })
      await accounts.updateBalance(senderId, sender.balance - amount)
      await accounts.updateBalance(receiverId, receiver.balance + amount)
      return res.status(200).json({ msg: "Successful tranaction." })
    })
  },
  500,
)

module.exports = {
  step1,
  step2,
}