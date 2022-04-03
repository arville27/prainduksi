const { data } = require('../config');

module.exports = {
    name: 'Dump db',
    matcher: function (client, event) {
        return event.message.text.match(/^x dumpdb/i) !== null;
    },
    run: async (client, event) => {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: JSON.stringify(data, null, 2),
        });
    },
};
