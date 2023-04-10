'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/');
const router = express.Router();

router.post('/signup', createUser);
router.post('/signin', signinUser);

async function createUser(req, res) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await User.create(req.body);
        res.status(200).json(record);
    } catch (e) { 
        res.status(403).send('Error Creating User'); 
    }
}

async function signinUser(req, res, next) {
    try {
        res.status(200).send(req.body);
    } catch (e) {
        res.status(401).send('Unauthorized credentials');
    }
}

module.exports = router;