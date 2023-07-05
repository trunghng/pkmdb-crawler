const express = require('express')
const detailController = require('../controllers/detailController')
const router = express.Router()

router.get('/:pokemonName', detailController.getDetail)

module.exports = router