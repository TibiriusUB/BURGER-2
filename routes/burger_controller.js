var path = require("path");
var db = require("../models");
var express = require("express");
var router = express.Router()

//module.exports = function (app) {

console.log("routes")
router.get("/", function (req, res) {
  db.burger.findAll({ attributes: ["id", "burger_name", "devoured"] }).then(function (menu) {
    //res.json(menu)
    //console.log("All burgers:", JSON.stringify(menu, null, 4));
    //var menuP = JSON.stringify(menu).trim()
    var menuObj = {
      burgers: menu
    };
    //console.log(menuObj.burgers[0].dataValues.burger_name);
    res.render("index", menuObj);
  });
});

router.post("/api/burgers", function (req, res) {
  db.burger.findOrCreate({ where: { burger_name: req.body.name, devoured: false } }).then(function (result) {
    //console.log(result);
    res.json({ id: result.insertID })
  })
});

router.put("/api/burgers/eat", function (req, res) {
  //console.log(req)
  let id = req.body.id;
  var newState = req.body.devoured
  //console.log(id + newState)
  db.burger.update({ "devoured": newState, }, { where: {"id" : id, },}).then(function (result) {
    //console.log(result);
    res.json({ id: result.insertID })
  })
});

//       res.json(dbPost);


module.exports = router;