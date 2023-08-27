const handler = require('../utils/handler')
const resolve = require('../utils/resolve')
const builder = require('../utils/builder')
const user = require('../services/users')
const account = require('../services/account')

const create = handler(
  async (req, res) => {
    await user.create(builder.userModel(resolve.userInfo(req)))
    return res.status(201).json({ msg: "New account is created" })
  },
  500,
)

const get = handler(
  async (req, res) => {
    return res.status(200).json(user.get())
  },
  500,
)

const remove = handler(
  async (req, res) => {
    const phoneNumber = resolve.phoneNumber(req)
    const { user } = await account.get(phoneNumber)
    return res.status(204).json(user.remove(user.id))
  },
  500,
)

module.exports = {
  create,
  get,
  remove,
}