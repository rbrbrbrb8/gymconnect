const mongoose = require('mongoose');
const logger = require('../logger/loggerHandler');
const dbHandler = {};
require('dotenv').config();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true
});

// console.log(process.env)

dbHandler.init = () => {
  mongoose.connect(`mongodb+srv://niceman:${process.env.MONGODB_PASSWORD}@cluster0.hgchqiu.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    logger.info('formed new connection to db');
    //set up change stream to messages collection
    const messageCollection = db.collection('Messages');
    dbHandler.changeStream = messageCollection.watch();
    dbHandler.changeStream.on('change',change => {
      console.log(change);
      if(change.operationType === 'insert'){
        const messageDetails = change.fullDocument;
        delete messageDetails['__v'];
        delete messageDetails['_id'];
        pusher.trigger('messages','inserted',{
          ...messageDetails
        });
      }
    })
  });
}


function getModel(model) {
  return require('./models/' + model);
}

dbHandler.createIfNotExists = async (modelName, doc, filter) => {
  const Model = getModel(modelName);
  const res = await Model.findOne(filter);
  // console.log(res);
  const toCreate = new Model(doc);
  return res ? undefined : await toCreate.save();
}

dbHandler.findOneInCollection = (modelName,filter) => {
  const Model = getModel(modelName);
  return Model.findOne(filter);
}

dbHandler.findInCollection = (modelName,filter) => {
  const Model = getModel(modelName);
  return Model.find(filter);
}

dbHandler.insertToCollection = (modelName,doc) => {
  const Model = getModel(modelName);
  const docToSave = new Model(doc);
  return docToSave.save();
}

dbHandler.aggregate  = (modelName,pipe) => {
  const Model = getModel(modelName);
  return Model.aggregate(pipe);
}
module.exports = dbHandler;