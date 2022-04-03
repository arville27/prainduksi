const path = require('path');
const { sync } = require('glob');

module.exports = (client) => {
    const files = sync(path.resolve(__dirname, 'commands/*.js'));
    client.commands = [];
    files.forEach((value) => {
        const content = require(value);
        if (content.matcher) client.commands.push(content);
    });
};
