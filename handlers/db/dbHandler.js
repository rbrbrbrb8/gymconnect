const mongoose = require('mongoose');
const logger = require('../logger/loggerHandler');
const dbHandler = {};
require('dotenv').config();

// console.log(process.env)

dbHandler.init = () => {
  mongoose.connect(`mongodb+srv://niceman:${process.env.MONGODB_PASSWORD}@cluster0.hgchqiu.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    logger.info('formed new connection to db');
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

module.exports = dbHandler;