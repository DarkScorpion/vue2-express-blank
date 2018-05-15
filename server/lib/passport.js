
var passport = require('passport');

passport.use(/*STRATIGE*/);

passport.serializeUser( (user, done) => {
  done(null, user);
});

passport.deserializeUser( (obj, done) => {
  done(null, obj);
});

module.exports = passport;
