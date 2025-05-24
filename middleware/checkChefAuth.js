// middleware/checkChefAuth.js
module.exports = function (req, res, next) {
    if (req.session && req.session.userType === 'chef') {
        return next();
    }
    res.redirect(`/unauthorizedAccess?route=${req.originalUrl}`);
};
