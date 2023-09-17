const prisma = require('../prisma')

console.log("[connected] user database")

const create = async (userModel) => {
  return prisma.user.create(userModel)
}

const retrieveOne = async (userId, nrc = false) => {
  return prisma.user.findMany({
    where: { userId },
    include: {
      nrc,
    }
  })
}

const retrieveAll = async (nrc = false) => {
  return prisma.user.findMany({
    include: {
      nrc
    }
  })
}

const deleteOne = async (userId) => {
  await prisma.nRCPhoto.delete({
    where: { nrcphotoId: userId }
  })

  await prisma.nrc.delete({
    where: { nrcId: userId }
  })

  await prisma.transaction.deleteMany({
    where: { senderId: userId }
  })

  await prisma.transaction.deleteMany({
    where: { receiverId: userId }
  })

  await prisma.user.delete({
    where: { userId: userId },
  })

  return prisma.account.delete({
    where: { id: userId }
  })
}

// deleteOne("+959777360906").then(res => console.log(res))

module.exports = {
  create,
  retrieveAll,
  retrieveOne,
  deleteOne,
}