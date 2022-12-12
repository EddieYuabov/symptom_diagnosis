const router = require('express').Router()
const controller = require('../controllers/DiagnosisController')

router.get('/', controller.GetDiagnosis)

module.exports = router
