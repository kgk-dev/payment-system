function id(req) {
  return Number(req.params['id'])
}

function userId(req) {
  return req.body['id']
}

function phoneNumber(req) {
  console.log("req body", req.body)
  return req.body['phoneNumber']
}

function password(req) {
  return req.body['password']
}

function userInfo(req) {
  return ({
    name: req.body.values['name'],
    gender: req.body.values['gender'],
    address: req.body.values['address'],
    phoneNumber: req.body['phoneNumber'],
    state: req.body.values['state'],
    district: req.body.values['district'],
    registerNumber: req.body.values['registerNumber'],
  })
}

module.exports = {
  id,
  userId,
  phoneNumber,
  password,
  userInfo,
}