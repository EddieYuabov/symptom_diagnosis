const { User_diagnosis } = require('../models')

const GetDiagnosis = async (req, res) => {
  try {
    const diagnosis = await User_diagnosis.findAll()
    res.send(diagnosis)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const CreateDiagnosis = async (req, res) => {
  try {
    const diagnosis = await User_diagnosis.create({ ...req.body })
    res.send(diagnosis)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const UpdateDiagnosis = async (req, res) => {
  try {
    const diagnosis = await User_diagnosis.update(
      { ...req.body },
      { where: { id: req.params.diagnosis_id }, returning: true }
    )
    res.send(diagnosis)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetDiagnosis,
  CreateDiagnosis,
  UpdateDiagnosis
}
