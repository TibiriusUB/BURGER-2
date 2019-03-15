var express = require("express");
//create a router
var router = express.Router()

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (menu) {
    var menuObj = {
      burgers: menu
    };
    //console.log(menuObj);
    res.render("index", menuObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.new([req.body.name], function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/eat", function (req, res) {
  let id = req.body.id;
  var newState = req.body.devoured
  burger.eat(newState, id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;