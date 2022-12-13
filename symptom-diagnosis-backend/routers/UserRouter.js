const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/:user_id', controller.GetUser)
router.post('/', controller.CreateUser)

module.exports = router
