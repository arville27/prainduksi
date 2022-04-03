const express = require('express');
const route = express.Router();
const line = require('@line/bot-sdk');
const { LINE_MESSAGING_API } = require('../config');
const client = require('../app');

route.post('/', line.middleware(LINE_MESSAGING_API), async (req, res) => {
    try {
        const result = await Promise.all(req.body.events.map(handleEvent));
        res.json(result);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

async function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    // Command handler
    for (const command of client.commands) {
        if (command.matcher(client, event)) {
            await command.run(client, event);
        }
    }
}

module.exports = route;
