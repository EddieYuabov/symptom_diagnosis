const router = require('express').Router()
const controller = require('../controllers/SymptomController')

router.get('/', controller.GetSymptoms)

module.exports = router
