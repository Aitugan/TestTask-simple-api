import config from '../config/';
const Sequelize = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize(
  	config.postgres.database,
    config.postgres.username,
    config.postgres.password, {
      host: config.postgres.host,
      dialect: 'postgres'
    }
)

export default sequelize;

