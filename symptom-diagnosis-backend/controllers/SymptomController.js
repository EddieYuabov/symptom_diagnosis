const { User_symptom } = require('../models')

const GetSymptoms = async (req, res) => {
  try {
    const symptom = await User_symptom.findAll()
    res.send(symptom)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetSymptoms
}
