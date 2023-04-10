'use strict';
const { DataTypes } = require('sequelize');

// Create a Sequelize model
const User = (sequelize) => sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;