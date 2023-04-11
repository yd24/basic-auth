'use strict';

const basicAuth = require('./basic');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { User } = require('../models/');

beforeAll( async() => {
    await User.sync();
});

afterAll( async() => {
    await User.drop();
});

describe('Testing basic authentication', () => {
    test('Testing credentials are being authenticated properly', async() => {
        const userObj = {
            username: 'John',
            password: 'Apples2Bananas$',
        };
        const encodedString = base64.encode(userObj.username + ':' + userObj.password);

        userObj.password = await bcrypt.hash(userObj.password, 10);
        const testUser = await User.create(userObj);

        const reqDummy = {
            headers: {
                authorization: `Basic ${encodedString}`,
            },
            body: {},
        };

        const resDummy = {
            status: jest.fn(() => resDummy),
            json: jest.fn(() => resDummy),
            send: jest.fn(() => resDummy),
        };

        const next = jest.fn();
        await basicAuth(reqDummy, resDummy, next);
        expect(next).toHaveBeenCalled();
    });
});