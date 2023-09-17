const express = require('express')
const router = express.Router()
const login = require('../controllers/login')
const verifyOTP = require('../middlewares/auth/verifyOTP')

router.post('/', login.step1)
router.post('/2', verifyOTP, login.step2)

module.exports = router 