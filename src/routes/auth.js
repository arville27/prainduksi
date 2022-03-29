const express = require('express');
const auth = express.Router();
const { SECRET } = require('../config');

auth.post('/', (req, res) => {
    if (req.body?.auth === SECRET) return res.status(200).send('SUCCESS');
    else return res.status(401).send('UNAUTHORIZED');
});

module.exports = auth;
