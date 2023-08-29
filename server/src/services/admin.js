const prisma = require('../prisma')

console.log("[connected] admin database")

const getById = async (id) => {
  return prisma.admin.findUnique({
    where: { id }
  })
}

const getTransactions = async () => {
  return prisma.transaction.findMany()
}

module.exports = {
  getById,
  getTransactions,
}