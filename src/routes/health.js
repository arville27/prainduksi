const express = require('express');
const route = express.Router();

route.get('/', (_, res) => res.sendStatus(200));

module.exports = route;
