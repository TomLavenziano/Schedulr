/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

		home: (req, res) => {
      console.log("Root requested...");
      console.log(req.session);
			return req.isAuthenticated() ? res.redirect('/schedule') : res.redirect('/login');
		},

    login: function(req, res) {
      console.log("Logging in...");
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) {
									res.send(err);
								} else {
									// req.session.authenticated = true;
									req.session.user = user;
                  console.log(user);
									return res.redirect('/profile');
								}
            });

        })(req, res);
    },

    logout: function(req, res) {
      console.log("Logging out...");
      req.logout();
			delete req.session.passport;
			delete req.session.user;
      res.redirect('/');
    }
};
