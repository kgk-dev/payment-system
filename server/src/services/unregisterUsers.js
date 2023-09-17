const prisma = require('../prisma')

console.log("[connected] unregister")

const retrieveOne = async (userId, user = false) => {
  console.log("Unregiester: ", userId)
  return prisma.unregisterAccount.findFirst({
    where: {
      userId,
    },
    include: {
      user,
    }
  })
}

const create = async (userId) => {
  return prisma.unregisterAccount.create({
    data: {
      userId,
    }
  })
}

const deleteOne = async (accountId) => {
  return prisma.unregisterAccount.delete({
    where: {
      accountId
    }
  })
}

module.exports = {
  create,
  retrieveOne,
  deleteOne,
}
