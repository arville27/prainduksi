const { SECRET, ADMIN_SECRET, data, GROUP_ID, states } = require('../config');
const client = require('../app');
const { saveData } = require('../utility');

module.exports = async (req, _, next) => {
    next();
    data.states.trial += 1;
    if (states.notification && req.body.secret === SECRET && !data.states.guessed) {
        data.states.guessed = true;
        const active = data.participants.find((group) => group.active === 1);
        if (GROUP_ID) {
            client
                .pushMessage(GROUP_ID, {
                    type: 'text',
                    text: `[${active.name}] Crack the passcode 🔑 after ${data.states.trial} trial(s)`,
                })
                .catch(console.log);
        }
    } else if (states.admin_notification && req.body.secret === ADMIN_SECRET) {
        data.states.trial -= 1;
        if (GROUP_ID) {
            client
                .pushMessage(GROUP_ID, {
                    type: 'text',
                    text: `[TEST] Auth success ✅`,
                })
                .catch(console.log);
        }
    }
    await saveData(data);
};
