const { User_symptom } = require('../models')

const GetSymptoms = async (req, res) => {
  try {
    const symptoms = await User_symptom.findAll()
    res.send(symptoms)
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
const GetSymptom = async (req, res) => {
  try {
    const symptom = await User_symptom.findOne({
      where: {
        id: req.params.symptom_id
      }
    })
    res.send(symptom)
  } catch (error) {
    throw error
  }
}
const CreateSymptom = async (req, res) => {
  console.log('inside create symptom')
  console.log(req.body)
  try {
    const symptom = await User_symptom.create({ ...req.body })
    res.send(symptom)
  } catch (error) {
    return res.status(404).send(error.message)
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
    return res.status(404).send(error.message)
  }
}
const DeleteSymptom = async (req, res) => {
  try {
    await User_symptom.destroy({ where: { id: req.params.symptom_id } })
    res.send({ msg: 'Deleted', payload: req.params.symptom_id, status: 'Ok' })
  } catch (error) {
    return res.status(404).send(error.message)
  }
}
module.exports = {
  GetSymptoms,
  GetSymptom,
  CreateSymptom,
  UpdateSymptom,
  DeleteSymptom
}
