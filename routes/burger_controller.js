var path = require("path");
var db = require("../models");
var express = require("express");
var router = express.Router()

//module.exports = function (app) {

  console.log("routes")
  router.get("/", function (req, res) {
    db.burger.findAll({attributes: ["id", "burger_name", "devoured"]}).then (function (menu) {
     //res.json(menu)
      console.log("All burgers:", JSON.stringify(menu, null, 4));
      //var menuP = JSON.stringify(menu).trim()
      var menuObj = {
        burgers: menu
      };
      console.log(menuObj.burgers[0].dataValues.burger_name);
      res.render("index",menuObj);
    });
  });
 
router.post("/api/burgers", function (req, res) {
  db.burger.new([req.body.name], function (result) {
    res.json({ id: result.insertID });
  });
});
  
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
//};
// var express = require("express");
// //create a router
// var router = express.Router()

// var burger = require("../models/burger.js");

// router.put("/api/burgers/eat", function (req, res) {
//   let id = req.body.id;
//   var newState = req.body.devoured
//   burger.eat(newState, id, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;