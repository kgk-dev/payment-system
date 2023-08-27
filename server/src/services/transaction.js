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

// create({
//   amount: "500",
//   date: new Date().toISOString(),
//   senderId: "+959777360903",
//   receiverId: "+959251156582"
// }).then((res) => console.log(
//   "[create] response: ", res
// ))

module.exports = {
  create,
  get,
}