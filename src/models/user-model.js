'use strict';
const { DataTypes } = require('sequelize');

// Create a Sequelize model
const TestUser = (sequelize) => sequelize.define('TestUser', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = TestUser;