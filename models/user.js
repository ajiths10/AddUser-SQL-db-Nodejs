const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    email: Sequelize.STRING,
});

module.exports = Users;