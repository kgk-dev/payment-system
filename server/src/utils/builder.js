function userModel({
  name,
  gender,
  address,
  phoneNumber,
  state,
  district,
  registerNumber,
}) {
  return ({
    data: {
      userId: phoneNumber,
      name,
      gender,
      address,
      nrc: {
        create: {
          state,
          district,
          registerNumber,
        }
      },
    }
  })
}

module.exports = {
  userModel,
}