const { User_diagnosis } = require('../models')

const GetDiagnoses = async (req, res) => {
  try {
    const diagnoses = await User_diagnosis.findAll()
    res.send(diagnoses)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const GetDiagnosis = async (req, res) => {
  try {
    const diagnosis = await User_diagnosis.findOne({
      where: {
        id: req.params.diagnosis_id
      }
    })
    res.send(diagnosis)
  } catch (error) {
    throw error
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
const DeleteDiagnosis = async (req, res) => {
  try {
    await User_diagnosis.destroy({ where: { id: req.params.diagnosis_id } })
    res.send({ msg: 'Deleted', payload: req.params.diagnosis_id, status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  GetDiagnoses,
  GetDiagnosis,
  CreateDiagnosis,
  UpdateDiagnosis,
  DeleteDiagnosis
}
