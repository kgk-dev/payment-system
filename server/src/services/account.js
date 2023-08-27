const prisma = require('../prisma')

console.log("[connected] account database")

const get = async (id) => {
  return prisma.account.findUnique({
    where: { id },
    include: {
      user: true
    }
  })
}

const create = async (id, password) => {
  return prisma.account.create({
    data: {
      id,
      password
    },
  })
}

const updateBalance = async (id, balance) => {
  return prisma.account.update({
    where: { id },
    data: { balance },
  })
}

const updatePasswrod = async (id, newPassword) => {
  return prisma.account.update({
    where: { id },
    data: { password: newPassword }
  })
}

const remove = async (id) => {
  return prisma.account.delete({
    where: { id }
  })
}

module.exports = {
  create,
  get,
  updatePasswrod,
  updateBalance,
  remove,
}