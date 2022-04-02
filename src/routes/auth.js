const express = require('express');
const auth = express.Router();
const { SECRET, participants } = require('../config');

auth.post('/', (req, res) => {
    if (req.body?.secret === SECRET) {
        const active = participants.find((group) => group.active === 1);
        req.session.access = active.id;
        res.sendStatus(200);
    } else res.sendStatus(401);
});

module.exports = auth;
