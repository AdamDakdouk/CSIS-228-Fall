const {Datatypes} = require("sequelize");
const sequelize = require("../database/configSqlz");
const Client = require("./Client");

const Country = sequelize.define('Country', {
    country_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    country_name: {
        type: Datatypes.STRING(255),
        allowNull: false,
    },
    client_abbr: {
        type: Datatypes.STRING(6),
        allowNull: false,
    },
    country_code: {
        type: Datatypes.STRING(4),
        allowNull: false,
    },
}, {
    tableName: 'country',
    createdAt: false,
    updatedAt: false,
});

Country.associate = () => {
    Country.hasMany(Client, {foreignKey: 'client_id'})
}

module.exports = Country;