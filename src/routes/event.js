const express = require('express');
const route = express.Router();
const { organizer, participants } = require('../config');
const authorization = require('../middlerware/authorization');

const participantsWithoutLink = participants.map((participant) => {
    const { logo, video, poster, name, active } = participant;
    return { logo, video, poster, name, active };
});

route.get('/members', (_, res) => res.json({ organizer, participants: participantsWithoutLink }));

route.get('/participant', (_, res) => res.json(participantsWithoutLink));

route.get('/organizer', (_, res) => res.json(organizer));

route.get('/participant/:id', (req, res) => {
    const participant = participantsWithoutLink.find((group) => group.id === req.params.id);
    if (participant) res.json(participant);
    else res.sendStatus(404);
});

route.get('/active/link', authorization, (req, res) => {
    if (!req.valid) return res.sendStatus(403);
    const active = participants.find((group) => group.active === 1);
    res.json({ link: active.link });
});

route.get('/active', (_, res) => {
    const active = participantsWithoutLink.find((group) => group.active === 1);
    res.json(active);
});

module.exports = route;
