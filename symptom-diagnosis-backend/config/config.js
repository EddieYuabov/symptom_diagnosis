require('dotenv').config()
module.export = {
  development: {
    database: 'symptom_diagnosis_development',
    dialect: 'postgres'
  },
  test: {
    database: 'symptom_diagnosis_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
