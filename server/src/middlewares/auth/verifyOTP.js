const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  console.log("cookies: ", req.cookies)
  const token = req.cookies.token
  console.log("[OTP] token: ", token)
  const secret = req.body['otp']
  if (token == null) return res.status(401).send('Unauthorized')
  jwt.verify(token, secret, (err, payload) => {
    console.error("error: ", err)
    if (err) return res.status(403).send('Invalid OTP')
    console.log("otp payload", payload)
    req.body['phoneNumber'] = payload.id
    next()
  })

}