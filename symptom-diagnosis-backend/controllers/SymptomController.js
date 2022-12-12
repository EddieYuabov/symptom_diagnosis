const { User_symptom } = require('../models')

const GetSymptoms = async (req, res) => {
  try {
    const symptom = await User_symptom.findAll()
    res.send(symptom)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const CreateSymptom = async (req, res) => {
  try {
    const symptom = await User_symptom.create({ ...req.body })
    res.send(symptom)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const UpdateSymptom = async (req, res) => {
  try {
    const symptom = await User_symptom.update(
      { ...req.body },
      { where: { id: req.params.symptom_id }, returning: true }
    )
    res.send(symptom)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const DeleteSymptom = async (req, res) => {
  try {
    await User_symptom.destroy({ where: { id: req.params.symptom_id } })
    res.send({ msg: 'Deleted', payload: req.params.symptom_id, status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  GetSymptoms,
  CreateSymptom,
  UpdateSymptom,
  DeleteSymptom
}
