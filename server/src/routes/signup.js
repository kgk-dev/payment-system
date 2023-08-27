const express = require('express')
const router = express.Router()
const controllers = require('../controllers/signup')
const verifyOTP = require('../middlewares/auth/verifyOTP')
const verifyPasswrod = require('../middlewares/auth/verifyPassword')

router.post('/', controllers.step1)
router.post('/2', verifyOTP, controllers.step2)
router.post('/3', verifyPasswrod, controllers.step3)
router.post('/4', verifyPasswrod, controllers.step4)

module.exports = router