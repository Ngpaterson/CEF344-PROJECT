const mongoose = require("mongoose");

//creating a schema
const UserSchema = {
    avatar: String,
    name: String,
    review: String    
  }  
  const User = mongoose.model("tests", UserSchema);
  
  module.exports = User;