'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_symptom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_symptom.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  User_symptom.init(
    {
      symptom: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      modelName: 'User_symptom',
      tableName: 'user_symptoms'
    }
  )
  return User_symptom
}
