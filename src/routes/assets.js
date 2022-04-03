const express = require('express');
const path = require('path');
const route = express.Router();
const authorization = require('../middlerware/authorization');

route.get('/video/:id.:ext', authorization, (req, res, next) => {
    if (!req.valid || req.session.access !== req.params.id) res.sendStatus(403);
    else next();
});

route.get('/poster/:id.:ext', authorization, (req, res, next) => {
    if (!req.valid || req.session.access !== req.params.id) res.sendStatus(403);
    else next();
});

route.get('/poster/:id.:ext/download', authorization, (req, res) => {
    if (!req.valid || req.session.access !== req.params.id) return res.sendStatus(403);

    const { id, ext } = req.params;
    res.download(path.join('src/static/Assets/poster', `${id}.${ext}`), `Invitation.${ext}`);
});

module.exports = route;
