var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Users.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {

    Users.findOne({ email: email }).populate('events').exec(function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      bcrypt.compare(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            events: user.events,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin
          };
          Users.update({ id : user.id }, { lastLogin : new Date() }).exec(function afterwards(err, updated){
            if (err)
              return done(null, false, {
                message: 'Error Recording Login Action'
              });
            console.log('Updated user\'s lastLogin: ' + updated[0].lastLogin);
          });

          return done(null, returnUser, { user : returnUser });
        });

    });
  }
));
