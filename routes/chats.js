const express = require('express');
const chatsRouter = express.Router();
const logger = require('../handlers/logger/loggerHandler');

//getChats() - gets the user's email and friends, and sends back the chat rooms (with latest message?)
//getMessages(room,startDate) - gets the room and start date, sends back the messages a week back
//newMessage(messageSchema) - gets a message in the correct schema, saves to DB
//need to learn how they make it update live :) 

chatsRouter.post('/newMessage',(req,res) => {

});


module.exports = chatsRouter;