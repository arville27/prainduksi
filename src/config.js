const assert = require('assert');

const config = require('../config.json');
assert(config?.SECRET, 'Secret is required for application to run');

module.exports = config;
