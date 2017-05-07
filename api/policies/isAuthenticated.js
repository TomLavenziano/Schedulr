/**
 * Checks if the User is Authenticated
 */

module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/login');
    }
};
