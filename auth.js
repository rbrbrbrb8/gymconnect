const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const logger = require('./handlers/logger/loggerHandler');



const dbHandler = require('./handlers/db/dbHandler');

const createUserIfDoesntExist = profile => {
  const docToSave = {
    email: profile.email,
    displayName: profile.displayName,
    given_name: profile.given_name,
    family_name: profile.family_name
  };
  return dbHandler.createIfNotExists('User', docToSave, { email: profile.email });
}

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://localhost:3000/google/callback",
  passReqToCallback: true
},
  async function (request, accessToken, refreshToken, profile, done) {
    // console.log(profile);
    const isCreated = await createUserIfDoesntExist(profile);
    if (!isCreated) logger.info(`user ${profile.email} already exists`) //save cookie!!
    else logger.info(`created user with email address ${profile.email}`);
    return done(null, profile);
    // });
  }
));

passport.serializeUser(function (user, done) {
  // console.log('serialize')
  // console.log(user);
  return done(null, user.email)
});

passport.deserializeUser(function (email, done) {
  // console.log('deserialize')
  // console.log(user);
  dbHandler.findOneInCollection('User', { email: email }).then(user => {
    return done(null, user);
  })

})