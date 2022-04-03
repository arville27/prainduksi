module.exports = {
    name: 'Spit user and group id',
    matcher: function (client, event) {
        return event.message.text.match(/^x identifier/i) !== null;
    },
    run: async (client, event) => {
        const messages = [];
        for (const key in event.source) {
            if (Object.hasOwnProperty.call(event.source, key)) {
                messages.push(`${key}: ${event.source[key]}`);
            }
        }
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: messages.join('\n'),
        });
    },
};
