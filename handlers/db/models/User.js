const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type:String, required:true,index:true},
  displayName: {type:String,required:true},
  given_name: {type:String,required:true},
  family_name: {type:String,required:true}
},{collection:"Users"});

module.exports = mongoose.model('Users',userSchema);