  const {portfoliomodel} = require("../model/portfolio_model");
  const {User} = require("../model/test")
  const {Take} = require("../model/testimonial_model")

//   const {testimonialmodel} = require("../model/testimonial_model");

  exports.portfolioAppRoute = async(req, res) => {
    try {
        items = await portfoliomodel.find({});
        return res.status(200).send({
            message: "Success",
            data: items
        })
    } catch(error) {
        res.status(500).json({ error: "Internal server error"})
    }
}

// exports.testAppRoute = async(req, res) => {
//   try {
//       items = await Take.find({});
//       return res.status(200).send({
//           message: "Success",
//           data: items
//       })
//   } catch(error) {
//       res.status(500).json({ error: "Internal server error"})
//   }
// }

// routes.route("/take").get((req, res) => {
//   User.find()
//   .then(foundTake => res.json(foundTake))
// })

// exports.testimonialAppRoute = async(req, res) => {
//     try {
//         items = await testimonialmodel.find({});
//         return res.status(200).send({
//             message: "Success",
//             data: items
//         })
//     } catch(error) {
//         res.status(500).json({ error: "Internal server error"})
//     }
// }