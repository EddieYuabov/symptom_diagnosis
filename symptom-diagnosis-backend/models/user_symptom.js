'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user_symptom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_symptom.init(
    {
      symptom: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'user_symptom',
      tableName: 'user_symptoms'
    }
  )
  return user_symptom
}
