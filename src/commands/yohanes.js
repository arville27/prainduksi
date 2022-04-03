module.exports = {
    name: 'Yohanes suka calculus',
    matcher: function (client, event) {
        return event.message.text.includes('yohanes');
    },
    run: async (client, event) => {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'Yohanes suka calculus',
        });
    },
};
