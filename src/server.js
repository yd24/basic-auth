'use strict';
const express = require('express');
const cors = require('cors');
const user_router = require('./auth/router');
const error404 = require('./auth/middleware/404');
const error500 = require('./auth/middleware/500');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', user_router);

app.use('*', error404);
app.use(error500);

module.exports = {
    app,
    start: (port) => app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    }),
};