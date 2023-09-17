const express = require('express')
const router = express.Router()
const signup = require('../controllers/signup')
const verifyOTP = require('../middlewares/auth/verifyOTP')
const verifyPasswrod = require('../middlewares/auth/verifyPassword')

router.post('/', signup.step1)
router.post('/2', verifyOTP, signup.step2)
router.post('/3', verifyPasswrod, signup.step3)
router.post('/4', verifyPasswrod, signup.step4)

module.exports = router