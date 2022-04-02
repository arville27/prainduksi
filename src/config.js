const assert = require('assert');

const config = require('../config.json');
const data = require('./data.json');
assert(config?.SECRET, 'Secret is required for application to run');
assert(config?.SESSION_SECRET, 'Session secret is required for application to run');

module.exports = { ...config, ...data };
