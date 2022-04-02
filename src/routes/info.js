const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    let body = '';
    req.session.views = req.session.views ? ++req.session.views : 1;
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

module.exports = route;
