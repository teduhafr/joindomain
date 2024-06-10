require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: "mariadb",
    dialectOptions: {
        
        multipleStatements: true
      },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    hostdanport: process.env.HOSTDANPORT

};