const { GROUP_ID, data } = require('../config');
const { saveData } = require('../utility');

module.exports = {
    name: 'Reset db states',
    matcher: function (client, event) {
        return (
            event.message.text.match(/^x reset /i) !== null &&
            event.source.type === 'group' &&
            event.source.groupId === GROUP_ID
        );
    },
    run: async (client, event) => {
        const arg = event.message.text.slice(8).trim();
        let messages;
        if (Object.hasOwnProperty.call(data.states, arg)) {
            if (arg === 'trial') data.states.trial = 0;
            else if (arg === 'guessed') data.states.guessed = false;
            messages = 'Reset sucess';
            await saveData(data);
        } else {
            messages = 'Reset failed, please check if the key is exists';
        }
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: messages,
        });
    },
};
