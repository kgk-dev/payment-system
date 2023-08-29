const express = require('express')
const controllers = require('../controllers/admin')
const router = express.Router()
const verify = require('../middlewares/auth/verifyAdmin')

router.get('/', controllers.getAdminInfo)
router.post('/login', controllers.getAdmin)
router.get('/transactions', verify, controllers.getTransactions)

module.exports = router