import Sequelize from "sequelize"

const sequelize = new Sequelize(process.env.DB_NAME,  process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
})

export default sequelize;
