const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  console.log("cookies: ", req.cookies)
  const token = req.cookies.token
  console.log("[Password] token: ", token)
  if (token == null) return res.status(401).end()
  jwt.verify(token, process.env.SIGNUP_TOKEN, (err, payload) => {
    console.error("error: ", err)
    console.log("payload: ", payload)
    if (err) return res.status(403).end()
    req.body['phoneNumber'] = payload.id
    next()
  })

}