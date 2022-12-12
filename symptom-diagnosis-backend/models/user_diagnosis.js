'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_diagnosis.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  User_diagnosis.init(
    {
      name: DataTypes.STRING,
      possible_cause: DataTypes.STRING,
      treatment: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User_diagnosis',
      tableName: 'user_diagnoses'
    }
  )
  return User_diagnosis
}
