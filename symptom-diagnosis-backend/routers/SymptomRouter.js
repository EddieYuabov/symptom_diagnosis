const router = require('express').Router()
const controller = require('../controllers/SymptomController')

router.get('/', controller.GetSymptoms)
router.get('/:symptom_id', controller.GetSymptom)
router.post('/new', controller.CreateSymptom)
router.put('/:symptom_id', controller.UpdateSymptom)
router.delete('/:symptom_id', controller.DeleteSymptom)

module.exports = router
