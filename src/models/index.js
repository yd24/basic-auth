'use strict';

const { Sequelize } = require('sequelize');
const db_url = process.env.DB_URL || 'sqlite:memory:';
const sequelize = new Sequelize(db_url);

const createUser = require('./user-model');
const UserModel = createUser(sequelize);

module.exports = {
    User: UserModel,
};