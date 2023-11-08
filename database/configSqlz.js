const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('csis_228_db', 'root', '123', {host: 'localhost', dialect: 'mysql'});

module.exports = sequelize;