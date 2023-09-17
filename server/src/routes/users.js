const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const verifyPasswrod = require('../middlewares/auth/verifyPassword')

router.get('/', users.getUserById)
router.post('/', users.create)
router.get('/transactions', users.getTransactionsById)
router.get('/delete/', verifyPasswrod, users.deleteOne)
router.post('/feedbacks', users.sentFeedback)

module.exports = router