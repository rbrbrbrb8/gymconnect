const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  room: {type:String, required:true,index:true}, //room is two mail with hyphens. 'test1@gmail.com-test2@gmail.com', AB ordered
  content: {type:String,required:true},
  sender: {type:String,required:true},
  date: {type:Number,required:true},
  time:{type:String,required:true}
},{collection:"Messages"});

module.exports = mongoose.model('Messages',messageSchema);