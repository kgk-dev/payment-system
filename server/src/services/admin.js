const prisma = require('../prisma')
const user = require('./users')

console.log("[connected] admin database")

const retrieve = async (adminId) => {
  return prisma.admin.findUnique({
    where: { id: adminId }
  })
}

const getUnregisteredUsers = async () => {
  return prisma.unregisterAccount.findMany({
    select: {
      user: true,
    }
  })
}

const getUserDetails = async (userId) => {
  let userInfo = await prisma.account.findUnique({
    where: { id: userId },
    include: {
      user: true,
    },
  })
  let nrc = await prisma.nrc.findUnique({
    where: { nrcId: userId },
    include: {
      photo: true
    }
  })
  return { ...userInfo.user, ...nrc }
}

const appectUser = async (id) => {
  await prisma.unregisterAccount.delete({
    where: { userId: id }
  })
  return prisma.account.update({
    where: { id },
    data: {
      register: true,
    }
  })
}

const rejectUser = async (id) => {
  await prisma.unregisterAccount.delete({
    where: { userId: id }
  })
  return user.deleteOne(id)
}

module.exports = {
  retrieve,
  getUnregisteredUsers,
  getUserDetails,
  appectUser,
  rejectUser,
}