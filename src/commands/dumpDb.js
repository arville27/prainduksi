const { data, GROUP_ID } = require('../config');

module.exports = {
    name: 'Dump db',
    matcher: function (client, event) {
        return (
            event.message.text.match(/^x dumpdb/i) !== null &&
            event.source.type === 'group' &&
            event.source.groupId === GROUP_ID
        );
    },
    run: async (client, event) => {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: JSON.stringify(data, null, 2),
        });
    },
};
