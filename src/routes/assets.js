const express = require('express');
const path = require('path');
const route = express.Router();

function authorization(req, _, next) {
    req.valid = req.params.id && req.session.access && req.params.id === req.session.access;
    next();
}

route.get('/video/:id.:ext', authorization, (req, res, next) => {
    if (req.valid) next();
    else res.status(403).send('Forbidden');
});

route.get('/poster/:id.:ext', authorization, (req, res, next) => {
    if (!req.valid) res.status(403).send('Forbidden');
    else next();
});

route.get('/poster/:id.:ext/download', authorization, (req, res) => {
    if (!req.valid) res.status(403).send('Forbidden');

    const { id, ext } = req.params;
    res.download(path.join('src/static/Assets/poster', `${id}.${ext}`), `Invitation.${ext}`);
});

module.exports = route;
