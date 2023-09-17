const prisma = require('../prisma')

console.log("[connected] nrcphoto database")

const create = async (id, front, back) => {
  return prisma.nRCPhoto.create({
    data: {
      nrcphotoId: id,
      front,
      back,
    }
  })
}

const retrieveOne = async (id) => {
  return prisma.nRCPhoto.findFirst({
    where: { id }
  })
}

const updateOne = async (id, front, back) => {
  return prisma.nRCPhoto.update({
    where: { id },
    data: {
      front,
      back,
    }
  })
}

const deleteOne = async (id) => {
  return prisma.nRCPhoto.delete({
    where: { id }
  })
}

module.exports = {
  create,
  retrieveOne,
  updateOne,
  deleteOne,
}