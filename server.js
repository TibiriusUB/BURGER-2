//Server setting and start
var express = require("express");
var app = express();
var PORT = process.env.PORT || 4000;
var db = require("./models");
var exphbs = require("express-handlebars");
var routes = require("./routes/burger_controller.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

//require("./routes/burger_controller.js");
// app.get("/", function(req,res) {
//     res.render("index");
// })
app.use(routes);
// app.listen(PORT, function () {
//     console.log("Flamebroilers are lighting up on http://localhost:" + PORT);
// });

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Flamebroilers are lighting up on http://localhost:" + PORT);
    });
});
