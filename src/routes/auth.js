const express = require('express');
const auth = express.Router();
const { SECRET, ADMIN_SECRET, participants } = require('../config');
const notification = require('../middlerware/pushNotification');

auth.post('/', notification, (req, res) => {
    if ([SECRET, ADMIN_SECRET].includes(req.body?.secret)) {
        const active = participants.find((group) => group.active === 1);
        if (!active) return res.sendStatus(404);
        req.session.access = active.id;
        res.sendStatus(200);
    } else res.sendStatus(401);
});

module.exports = auth;
