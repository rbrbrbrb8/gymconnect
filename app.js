const express = require('express');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const https = require('https');
const fs = require('fs');
require('./auth');
const port = process.env.PORT || 3000;
const logger = require('./handlers/logger/loggerHandler');
const dbHandler = require('./handlers/db/dbHandler');
const MongoStore = require('connect-mongo');

dbHandler.init();


const app = express();
app.use(express.json())
app.use(session({
  secret: 'siuuuuuuu',
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://niceman:${process.env.MONGODB_PASSWORD}@cluster0.hgchqiu.mongodb.net/?retryWrites=true&w=majority`
  })
}));
app.use(passport.initialize());
app.use(passport.session());

const httpsOptions = {
  cert: fs.readFileSync(path.resolve(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.resolve(__dirname, 'ssl', 'server.key'))
}

const isLoggedIn = (req, res, next) => {
  // console.log(req.user);
  req.user ? next() : res.redirect('/login');
}

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}))


app.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/');
  });
})

app.get('/login', (req, res) => {
  const pathToSend = path.resolve(__dirname, 'src', 'login', 'login.html')
  res.sendFile(pathToSend);
})

app.use(isLoggedIn, function (req, res) {
  const pathToSend = path.resolve(__dirname, 'src', 'main', 'index.html')
  return res.sendFile(pathToSend);
});

https.createServer(httpsOptions, app).listen(port, () => {
  logger.info(`listening on port ${port}`);
})
