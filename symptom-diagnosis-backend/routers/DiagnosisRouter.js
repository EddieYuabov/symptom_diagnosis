const router = require('express').Router()
const controller = require('../controllers/DiagnosisController')

router.get('/', controller.GetDiagnosis)
router.post('/new', controller.CreateDiagnosis)

module.exports = router
