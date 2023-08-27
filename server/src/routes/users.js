const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')
const verifyPasswrod = require('../middlewares/auth/verifyPassword')

router.get('/', controller.get)
router.post('/', controller.create)
router.get('/delete/', verifyPasswrod, controller.remove)

module.exports = router