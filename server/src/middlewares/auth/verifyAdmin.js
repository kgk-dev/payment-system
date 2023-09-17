const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const token = req.cookies.adminToken
  if (token == null) return res.status(401).end()
  jwt.verify(token, process.env.ADMIN_LOGIN_TOKEN, (err, payload) => {
    console.error("error: ", err)
    console.log("payload: ", payload)
    if (err) return res.status(403).end()
    req.body['adminId'] = payload.id
    next()
  })
}