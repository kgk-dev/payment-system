const prisma = require('../prisma')
console.log("[connected] transaction database")

const create = async ({ amount, date, senderId, receiverId }) => {
  return prisma.transaction.create({
    data: {
      amount,
      date,
      senderId,
      receiverId,
    }
  })
}

const get = async (id) => {
  return prisma.password.findUnique({
    where: { id },
    include: {
      sentTransactions: true,
      receivedTransactions: true,
    }
  })
}

module.exports = {
  create,
  get,
}