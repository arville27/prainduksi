module.exports = function authorization(req, _, next) {
    req.valid = req.params.id && req.session.access && req.params.id === req.session.access;
    next();
};
