const mongoose = require("mongoose");

// const Schema = {
//     _id: String,
//     avatar: String,
//     name: String,
//     review: String
//  }   
//  const Take = mongoose.model("tests", Schema);

// module.exports = Take;

const Take = new mongoose.model("tests", mongoose.Schema({

    _id: String,
    avatar: String,
    name: String,
    review: String,
}))

module.exports = {
     Take
}