const { participants } = require('../config');

module.exports = function authorization(req, _, next) {
    const active = participants.find((group) => group.active === 1);
    if (!active) {
        req.valid = false;
        return next();
    }
    const valid = req.session.access == active.id;
    if (!valid) req.session.access = undefined;
    req.valid = valid;
    next();
};
