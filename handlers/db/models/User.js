const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  email: {type:String, required:true,index:true},
  displayName: {type:String,required:true}
});

const userSchema = new Schema({
  email: {type:String, required:true,index:true},
  displayName: {type:String,required:true},
  given_name: {type:String,required:true},
  family_name: {type:String,required:true},
  friends:{type:[friendSchema],required:false}
},{collection:"Users"});

module.exports = mongoose.model('Users',userSchema);