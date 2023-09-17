const prisma = require('../prisma')

console.log("[connected] account database")

const retrieveAll = async () => {
  return prisma.account.findMany()
}

const retrieveOne = async (accountId) => {
  return prisma.account.findUnique({
    where: { id: accountId },
    include: {
      user: true,
    }
  })
}

const create = async (accountId, password) => {
  return prisma.account.create({
    data: {
      id: accountId,
      password
    },
  })
}

const updateBalance = async (accountId, balance) => {
  return prisma.account.update({
    where: { id: accountId },
    data: { balance },
  })
}

const updatePassword = async (accountId, newPassword) => {
  return prisma.account.update({
    where: { id: accountId },
    data: { password: newPassword }
  })
}

const remove = async (accountId) => {
  return prisma.account.delete({
    where: { id: accountId }
  })
}

module.exports = {
  create,
  retrieveAll,
  retrieveOne,
  updatePassword,
  updateBalance,
  remove,
}