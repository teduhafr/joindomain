require('dotenv').config({ path: '.env' })

module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'joindomainap',
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