'use strict';

require('dotenv').config();
const server = require('./src/server');
const { sequelize } = require('./src/models/');

const PORT = process.env.PORT || 3001;

sequelize.sync()
    .then(() => server.start(PORT))
    .catch((e) => console.error('Server could not start', e));