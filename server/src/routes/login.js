const express = require('express')
const router = express.Router()
const controllers = require('../controllers/login')
const verifyOTP = require('../middlewares/auth/verifyOTP')

router.post('/', controllers.step1)
router.post('/2', verifyOTP, controllers.step2)

module.exports = router 