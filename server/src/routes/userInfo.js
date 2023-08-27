const controllers = require("../controllers/userinfo")
const verifyAccount = require('../middlewares/auth/veifyAccount')
const express = require('express')
const router = express.Router()

router.get('/', verifyAccount, controllers.get)

module.exports = router 