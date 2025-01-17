const { config, GROUP_ID } = require('../config');

module.exports = {
    name: 'Dump server config',
    matcher: function (client, event) {
        return (
            event.message.text.match(/^x dumpconfig/i) !== null &&
            event.source.type === 'group' &&
            event.source.groupId === GROUP_ID
        );
    },
    run: async (client, event) => {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: JSON.stringify(config, null, 2),
        });
    },
};
