const services = require('../services/transaction')
const account = require('../services/account')
const resolve = require('../utils/resolve')
const handler = require('../utils/handler')

const step1 = handler(
  async (req, res) => {
    const phoneNumber = req.body['receiver']
    account.get(phoneNumber).then((values) => {
      console.log("[transaction1] values", values)
      if (values)
        return res.status(200).json({ msg: "Access gain" })
      return res.status(401).json({ msg: "Access denied" })
    })
  },
  500,
)

const step2 = handler(
  async (req, res) => {
    const transferData = req.body['transferData']
    const senderId = resolve.phoneNumber(req)
    const receiverId = transferData.receiver
    const transferAmount = Number(transferData.amount)
    const password = resolve.password(req)
    const sender = await account.get(senderId)
    const receiver = await account.get(receiverId)
    console.log("receiver", receiver)
    console.log(sender.password, password)
    if (sender.password === password) {
      try {
        await account.updateBalance(senderId, sender.balance - transferAmount)
        await account.updateBalance(receiverId, receiver.balance + transferAmount)
        const ok = await services.create({
          amount: transferAmount,
          senderId,
          receiverId,
          date: new Date().toISOString(),
        })
        if (ok)
          return res.status(200).json({ msg: "Successful tranaction." })
      } catch (error) {
        console.log("error in transconit", error)
        return res.status(500).json({ msg: "Internal server error" })
      }
    }
    return res.status(401).json({ msg: "Incorrect password" })
  },
  500,
)

module.exports = {
  step1,
  step2,
}