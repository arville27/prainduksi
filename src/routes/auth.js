const express = require('express');
const auth = express.Router();
const { SECRET } = require('../config');

auth.post('/', (req, res) => {
    if (req.body?.id && req.body?.auth === SECRET) {
        req.session.access = req.body.id;
        res.status(200).send('SUCCESS');
    } else res.status(401).send('UNAUTHORIZED');
});

module.exports = auth;
