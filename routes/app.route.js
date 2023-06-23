const controller = require("../controllers/app.controller");
const routes = require("express").Router();
const User = require("../model/test.js");

routes.get("/portfolio", controller.portfolioAppRoute);
routes.get("/testimonial", controller.testimonialAppRoute);

routes.route("/create").post((req, res) => {
    const avatar = req.body.avatar; //parsing the fronend request name to dbname
    const name = req.body.name;
    const review = req.body.review;
    
    const newUser = new User({
      avatar,      
      name,
      review,
    });
    newUser.save();
});

module.exports = routes