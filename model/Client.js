const {Datatypes} = require("sequelize");
const sequelize = require("../database/configSqlz");
const Country = require("./Country");

const Client = sequelize.define('Client', {
    client_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    client_first_name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_last_name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_username: {
        type: Datatypes.STRING,
        allowNull: true,
    },
    client_email: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_mobile: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_password: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_address: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    client_gender: {
        type: Datatypes.BOOLEAN,
        allowNull: true,
    },
    client_dob: {
        type: Datatypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //default value: Datatype.NOW,
    },
    role: {
        type: Datatypes.ENUM('user', 'admin', 'superuser'),
        allowNull: true,
    }
}, {
    tableName:"client",
    createdAt: false,
    updatedAt: false,
});
Client.associate = () => {
    Client.belongsTo(Country, {foreignKey: 'country_id'});
}