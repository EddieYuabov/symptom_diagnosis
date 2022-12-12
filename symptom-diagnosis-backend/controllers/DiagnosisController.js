const { User_diagnosis } = require('../models')

const GetDiagnosis = async (req, res) => {
  try {
    const diagnosis = await User_diagnosis.findAll()
    res.send(diagnosis)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetDiagnosis
}
