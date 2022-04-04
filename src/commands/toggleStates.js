const { GROUP_ID, data } = require('../config');
const { saveData } = require('../utility');

module.exports = {
    name: 'Toggle db states',
    matcher: function (client, event) {
        return (
            event.message.text.match(/^x toggle /i) !== null &&
            event.source.type === 'group' &&
            event.source.groupId === GROUP_ID
        );
    },
    run: async (client, event) => {
        const arg = event.message.text.slice(9).trim();
        let messages;
        if (arg === 'admin notif') {
            data.states.admin_notification = !data.states.admin_notification;
            messages = `Admin auth notification is set to ${data.states.admin_notification}`;
        } else if (arg === 'notif') {
            data.states.notification = !data.states.notification;
            messages = `Kelas auth notification is set to ${data.states.notification}`;
        } else {
            messages = 'Failed to toggle a state, please check if the key is exists';
        }
        await saveData(data);
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: messages,
        });
    },
};
