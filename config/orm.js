var connection = require("./connection.js");

var orm = {
    selectAll: function (table, cb) {
        var querystring = "SELECT * FROM ?? ";
        connection.query(querystring, [table], function (err, result) {
            if (err) throw err;
            //console.log(result)
            cb(result);
        });
    },
    insertOne: function (table, burger_name, cb) {
        var devoured = false
        var querystring = "INSERT INTO ?? (burger_name,devoured) VALUES(?,?)";
        connection.query(querystring, [table, burger_name, devoured], function (err, result) {
            if (err) throw err;
            //console.log(result)
            cb(result);
        });
    },
    updateOne: function (table, devoured, burger_id, cb) {
       // console.log("UPDATE "+table+" SET devoured = "+devoured+" WHERE id = "+ burger_id)
        var querystring = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(querystring, [table, devoured, burger_id], function (err, result) {
            if (err) throw err;
            //console.log(result)
            cb(result);
        });
    }
};

module.exports = orm;
//console.log(orm.selectAll("burgers",function(res){return res}))
//orm.insertOne("burgers","matahorn",function(res){console.log(res)});


