const Router = require('express').Router()
const SymptomRouter = require('./SymptomRouter')

Router.use('/symptoms', SymptomRouter)

module.exports = Router
