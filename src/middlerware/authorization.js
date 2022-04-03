const { participants } = require('../config');

module.exports = function authorization(req, _, next) {
    const active = participants.find((group) => group.active === 1);
    const valid = req.session.access == active.id;
    if (!valid) req.session.access = undefined;
    req.valid = valid;
    next();
};
