const mongoose = require('mongoose');
const dbHandler = require('../db/dbHandler');
const logger = require('../logger/loggerHandler');
const chatsHandler = {};
require('dotenv').config();
const MESSAGE = 'Message'
// console.log(process.env)

chatsHandler.addMessage = (doc) => {
  return dbHandler.insertToCollection(MESSAGE, doc);
}

const emailSorter = (email1, email2) => {
  const email1Lower = email1.toLowerCase(), email2Lower = email2.toLowerCase();
  if (email1Lower < email2Lower) //sort string ascending
    return -1;
  if (email1Lower > email2Lower)
    return 1;
  return 0; //default return value (no sorting)
}

chatsHandler.generateRoomNames = (email, friends) => {
  return friends.map(friend => {
    const roomName = [email, friend.email].sort(emailSorter).join('-');
    return roomName;
  })
}

chatsHandler.getRangeMessages = (room, startDate, endDate) => {
  return dbHandler.aggregate(MESSAGE, [
    { $match: { 'room': room, $and: [{ 'date': { $gte: startDate } }, { 'date': { $lte: endDate } }] } }, //checks for messages in relevant room and in date range
    {
      $group: {
        '_id': '$date',
        'messages': {
          $push: {
            'content': '$content',
            'sender': '$sender', //add condition to determine 'me' or 'other'
            'time': '$time',
            'timeSeconds':'$timeSeconds'
          }
        }
      }
    },
    {
      $project: {
        'date': '$_id',
        'toGroup':'0',
        'messages': '$messages',
        'test': [{$toString:{$toLong:'$_id'}}, '$messages']
      }
    },
    {
      $group:{
        '_id':'$toGroup',
        'test':{$push:'$test'}
      }
    },
    {
      $replaceRoot: {
        newRoot:{$arrayToObject:'$test'}
      }
    },
    // { $unset: '_id' }
  ])
}

module.exports = chatsHandler;