const express = require('express')
const router = express.Router()
const controllers = require("../controllers/logout")

router.get('/', controllers.get)

module.exports = router