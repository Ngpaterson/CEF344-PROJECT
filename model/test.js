const mongoose = require("mongoose");

//creating a schema
const UserSchema = {
    avatar: String,
    name: String,
    review: String    
  }  
  const User = mongoose.model("testimonials", UserSchema);
  
  module.exports = User;