const mongoose = require("mongoose");
const portfoliomodel = new mongoose.model("portfolio", mongoose.Schema({

    _id: String,
    image: String,
    title: String,
    github: String,
    demo: String,
}))

module.exports = {
     portfoliomodel
}