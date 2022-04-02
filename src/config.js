const assert = require('assert');

const config = require('../config.json');
const data = require('./data.json');
assert(config?.SECRET, 'Secret is required for application to run');
assert(config?.SESSION_SECRET, 'Session secret is required for application to run');
assert(
    config?.LINE_MESSAGING_API.CHANNEL_ACCESS_TOKEN,
    'LINE Channel Access token is required for application to run'
);
assert(config?.LINE_MESSAGING_API.CHANNEL_SECRET, 'LINE Channel secret is required for application to run');

const LINE_MESSAGING_API = {
    channelAccessToken: config.LINE_MESSAGING_API.CHANNEL_ACCESS_TOKEN,
    channelSecret: config.LINE_MESSAGING_API.CHANNEL_SECRET,
};

module.exports = { ...config, LINE_MESSAGING_API, ...data };
