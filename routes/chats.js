const express = require('express');
const chatsHandler = require('../handlers/chats/chatsHandler');
const dbHandler = require('../handlers/db/dbHandler');
const chatsRouter = express.Router();
const logger = require('../handlers/logger/loggerHandler');


// /rooms/get() - gets the user's email and friends, and sends back the chat rooms (with latest message?)
// /messages/get(room,startDate) - gets the room and start date, sends back the messages a week back
// /messages/new(messageSchema) - gets a message in the correct schema, saves to DB
//need to learn how they make it update live :) 

chatsRouter.get('/rooms/get',(req,res) => {
  const email = req.user.email;
  const friends = req.user.friends;
  // const rooms = 
})

chatsRouter.post('/messages/new', async (req, res) => {
  const doc = req.body;
  chatsHandler.addMessage(doc).then(saveRes => {
    res.status(201).send(saveRes);
  }).catch(err => {
    res.status(500).send(err);
  });

});

chatsRouter.get('/messages/get', async (req, res) => { //sends the messages as arrays per date!
  const room = req.query.room;
  const endDate = Number(req.query.startDate);

  const weekMilli = 1000 * 60 * 60 * 24 * 7;
  const startDate = endDate - weekMilli;
  // console.log(req.user)
  chatsHandler.getRangeMessages(room, startDate, endDate).then(searchRes => {
    res.status(200).send(searchRes);
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

module.exports = chatsRouter;