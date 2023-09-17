const prisma = require('../prisma')
console.log("[connected] transaction database")

const create = async ({
  id,
  amount,
  date,
  senderId,
  receiverId,
  senderName,
  receiverName,
}) => {
  return prisma.transaction.create({
    data: {
      id,
      amount,
      date,
      senderId,
      receiverId,
      senderName,
      receiverName,
    },
  })
}

const retrieveOne = async (userId) => {
  return prisma.user.findUnique({
    where: {
      userId
    },
    select: {
      sentTransactions: true,
      receivedTransactions: true,
    }
  })
}

const retrieveAll = async () => {
  return prisma.transaction.findMany({
    orderBy: {
      date: "desc",
    }
  })
}

module.exports = {
  create,
  retrieveOne,
  retrieveAll,
}