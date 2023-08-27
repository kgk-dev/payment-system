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
      phoneNumber,
    }
  })
}

module.exports = {
  userModel,
}