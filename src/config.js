const assert = require('assert');

const config = require('../config.json');
const data = require('./db.json');
assert(config?.SECRET, 'SECRET is required for application to run');
assert(config?.ADMIN_SECRET, 'ADMIN_SECRET is required for application to run');
assert(config?.SESSION_SECRET, 'SESSION_SECRET is required for application to run');
assert(
    config?.LINE_MESSAGING_API.CHANNEL_ACCESS_TOKEN,
    'CHANNEL_ACCESS_TOKEN is required for application to run'
);
assert(config?.LINE_MESSAGING_API.CHANNEL_SECRET, 'CHANNEL_SECRET is required for application to run');

const LINE_MESSAGING_API = {
    channelAccessToken: config.LINE_MESSAGING_API.CHANNEL_ACCESS_TOKEN,
    channelSecret: config.LINE_MESSAGING_API.CHANNEL_SECRET,
};

module.exports = { ...config, LINE_MESSAGING_API, ...data, data };
