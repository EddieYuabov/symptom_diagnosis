'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user_diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_diagnosis.init(
    {
      name: DataTypes.STRING,
      possible_cause: DataTypes.STRING,
      treatment: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'user_diagnosis',
      tableName: 'user_diagnoses'
    }
  )
  return user_diagnosis
}
