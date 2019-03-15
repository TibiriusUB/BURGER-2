//Server setting and start
var express = require("express");
var PORT = process.env.port || 3000;
var app = express();
//var path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// how to add resources to your HTML. Stack Overflow for the win!
app.use( express.static( "public" ) );
app.use("/images", express.static(__dirname + "./assets/img"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);
var routes = require("./controllers/burger_controller.js")
app.use(routes);
app.listen(PORT, function() {
    console.log("Flamebroilers are lighting up on http://localhost:" + PORT);
});

