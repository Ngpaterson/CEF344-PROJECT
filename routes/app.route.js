const controller = require("../controllers/app.controller");
const routes = require("express").Router();
const User = require("../model/test.js");
const Take = require("../model/testimonial_model.js");

routes.get("/portfolio", controller.portfolioAppRoute);
// routes.get("/testimonial", controller.testimonialAppRoute);
routes.get("/take", controller.testAppRoute);

routes.route("/create").post((req, res) => {
    const avatar = req.body.avatar; //parsing the fronend request name to dbname
    const name = req.body.name;
    const review = req.body.review;
    
    const newUser = new Take({
      avatar,      
      name,
      review,
    });
    newUser.save();
});


// routes.route("/take").get((req, res) => {
//   User.find()
//   .then(foundTake => res.json(foundTake))
// })

module.exports = routes