const express = require('express');
const auth = express.Router();
const { SECRET, ADMIN_SECRET, participants } = require('../config');

auth.post('/', (req, res) => {
    if ([SECRET, ADMIN_SECRET].includes(req.body?.secret)) {
        const active = participants.find((group) => group.active === 1);
        req.session.access = active.id;
        res.sendStatus(200);
    } else res.sendStatus(401);
});

module.exports = auth;
