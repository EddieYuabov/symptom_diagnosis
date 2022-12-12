const router = require('express').Router()
const controller = require('../controllers/DiagnosisController')

router.get('/', controller.GetDiagnosis)
router.post('/new', controller.CreateDiagnosis)
router.put('/:diagnosis_id', controller.UpdateDiagnosis)
router.delete('/:diagnosis_id', controller.DeleteDiagnosis)

module.exports = router
