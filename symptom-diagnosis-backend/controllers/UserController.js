const { User } = require('../models')
const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const GetUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.user_id
      }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetUser,
  CreateUser
}
