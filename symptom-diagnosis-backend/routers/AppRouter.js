const Router = require('express').Router()
const SymptomRouter = require('./SymptomRouter')
const DiagnosisRouter = require('./DiagnosisRouter')

Router.use('/symptoms', SymptomRouter)
Router.use('/diagnosis', DiagnosisRouter)

module.exports = Router
