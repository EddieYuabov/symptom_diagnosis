const Router = require('express').Router()
const SymptomRouter = require('./SymptomRouter')
const DiagnosisRouter = require('./DiagnosisRouter')
const UserRouter = require('./UserRouter')

Router.use('/symptoms', SymptomRouter)
Router.use('/diagnosis', DiagnosisRouter)
Router.use('/user', UserRouter)

module.exports = Router
