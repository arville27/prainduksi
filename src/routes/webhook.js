const express = require('express');
const route = express.Router();
const line = require('@line/bot-sdk');
const { LINE_MESSAGING_API } = require('../config');

route.post('/', line.middleware(LINE_MESSAGING_API), async (req, res) => {
    const result = await Promise.all(req.body.events.map(handleEvent));
    return res.json(result);
});

const client = new line.Client(LINE_MESSAGING_API);
function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: event.message.text,
    });
}

module.exports = route;
