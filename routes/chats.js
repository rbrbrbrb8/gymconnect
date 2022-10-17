const express = require('express');
const chatsHandler = require('../handlers/chats/chatsHandler');
const dbHandler = require('../handlers/db/dbHandler');
const chatsRouter = express.Router();
const logger = require('../handlers/logger/loggerHandler');


// /meesages/initial() - gets the user's email and friends, and sends back the chat rooms (with 1 week of messagess to each room)
// /messages/get(room,startDate) - gets the room and start date, sends back the messages a week back
// /messages/new(messageSchema) - gets a message in the correct schema, saves to DB
// consider making the initial room request pull the messages also
//need to learn how they make it update live :) 

chatsRouter.get('/messages/initial', async (req, res) => {
  const email = 'connectfour777@gmail.com'; //req.user.email
  const friends = [{'email':'rbrbrbrb8@gmail.com'}]; //req.user.friends
  const rooms = chatsHandler.generateRoomNames(email, friends);
  const endDate = (new Date()).getTime();
  const weekMilli = 1000 * 60 * 60 * 24 * 7;
  const startDate = endDate - weekMilli;

  Promise.all(rooms.map(room => chatsHandler.getRangeMessages(room, startDate, endDate))).then(chatsArr => {
    const final = rooms.reduce((roomsObj,room,i) =>{
      roomsObj[room] = chatsArr[i][0];
      console.log(chatsArr[i]);
      return roomsObj;  
    },{}); //messages with relevant room;
    //object.keys() for room names
    //object.values() for messages
    res.status(200).send(final);
  })
  .catch(err => {
    res.status(500).send(err);
  });

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