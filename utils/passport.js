const passport = require('passport')

const dotenv = require('dotenv').config()
const { CLIENTID, CLIENTSECRET } = process.env

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: CLIENTID,
    clientSecret: CLIENTSECRET,
    callbackURL: "https://anfieldturfbookings.online/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile)
  }
));






