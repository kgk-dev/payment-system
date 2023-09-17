const userInfo = require("../controllers/userinfo")
const verifyAccount = require('../middlewares/auth/veifyAccount')
const express = require('express')
const router = express.Router()

router.get('/', verifyAccount, userInfo.get)

module.exports = router 