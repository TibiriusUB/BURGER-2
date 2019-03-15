// Set up MySQL connection  dotenv protection is used with DB info. (may not deploy!)
var mysql = require("mysql");
require("dotenv").config();

// var connection = mysql.createConnection({
//   host: process.env.DB_host,
//   port: process.env.DB_port,
//   user: process.env.DB_user,
//   password: process.env.DB_password,
//   database: process.env.DB_database
//});
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "root",
  database: "burgers_db"
  });
};
  connection.connect(function (err) {
    if (err) {
      console.error("ERROR CONNECTING!:\n " + err.stack);
      return;
    }
    console.log("Grill id: " + connection.threadId);
  });

  // export connection 
  module.exports = connection;
  //https://vast-tor-57586.herokuapp.com/ | https://git.heroku.com/vast-tor-57586.git
