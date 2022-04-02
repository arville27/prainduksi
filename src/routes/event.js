const express = require('express');
const route = express.Router();
const { organizer, participants } = require('../config');

route.get('/members', (_, res) => res.json({ organizer, participants }));

route.get('/participant', (_, res) => res.json(participants));

route.get('/organizer', (_, res) => res.json(organizer));

route.get('/participant/:id', (req, res) => {
    const participant = participants.find((group) => group.id === req.params.id);
    if (participant) res.json(participant);
    else res.sendStatus(404);
});

route.get('/active', (_, res) => {
    const active = participants.find((group) => group.active === 1);
    res.json(active);
});

module.exports = route;
