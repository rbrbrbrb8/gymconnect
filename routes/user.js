const express = require('express');
const chatsHandler = require('../handlers/chats/chatsHandler');
const dbHandler = require('../handlers/db/dbHandler');
const userRouter = express.Router();
const logger = require('../handlers/logger/loggerHandler');


// /user/initial() - sends the username,user email and friends



userRouter.get('/initial', async (req, res) => { //sends the messages as arrays per date!
  res.status(200).send({
    displayName:req.user.displayName,
    email:req.user.email,
    friends:req.user.friends
  });
});

module.exports = userRouter;