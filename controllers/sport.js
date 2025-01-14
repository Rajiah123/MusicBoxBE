const {Sport} = require("../models/Sports")

exports.sport_create_post = (req,res) => {
    console.log(req.body);
    let sport = new Sport(req.body);
    sport.save()
    .then(() => {
      res.json({sport})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
      })
}
exports.sport_index_get = (req, res) => {
    Sport.find()
    .then((Sports) => {
      // res.render("author/index", {authors, dayjs});
      res.json({ Sports })
    })
    .catch((err) => {
      console.log(err);
    })
  
  }
exports.sport_delete_get = (req, res) => {
    console.log(req.query.id);
    Sport.findByIdAndDelete(req.query.id)
    .then((sport) => {
      // res.redirect("/author/index");
      res.json({sport})
    })
    .catch((err) => {
      console.log(err);
    })
  }