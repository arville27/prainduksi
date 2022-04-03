module.exports = {
    name: 'Echo command',
    matcher: function (client, event) {
        return event.message.text.match(/hi/i) !== null;
    },
    run: async (client, event) => {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: event.message.text,
        });
    },
};
