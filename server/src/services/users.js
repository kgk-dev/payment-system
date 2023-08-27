const prisma = require('../prisma')

console.log("[connected] user database")

const create = async (userModel) => {
  return prisma.user.create(userModel)
}

const get = async (id) => {
  return prisma.user.findMany({
    where: { id },
    include: {
      nrc: true,
    }
  })
}

const remove = async (id) => {
  await prisma.nrc.delete({
    where: { id }
  })
  const user = await prisma.user.delete({
    where: { id },
  })
  return prisma.password.delete({
    where: { id: user.phoneNumber }
  })
}

module.exports = {
  create,
  get,
  remove,
}