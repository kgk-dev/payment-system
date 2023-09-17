const prisma = require('../prisma')

console.log("[connected] feedback database")

const retrieveAll = async () => {
  return prisma.feedback.findMany()
}

const deleteOne = async (id) => {
  console.log('id delete: ', id)
  return prisma.feedback.delete({
    where: { id }
  })
}

const create = async (name, message) => {
  return prisma.feedback.create({
    data: {
      name,
      message,
    }
  })
}

module.exports = {
  create,
  retrieveAll,
  deleteOne,
}