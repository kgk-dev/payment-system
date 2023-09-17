const express = require('express')
const router = express.Router()
const { step1, step2 } = require('../controllers/transfer')

router.post('/', step1)
router.post('/2', step2)

module.exports = router