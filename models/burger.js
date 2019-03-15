// import orm.js
var orm = require("../config/orm.js");
//call the orm

var burger = {
    all: function (callBack) {
        orm.selectAll("burgers", function (res) {
            callBack(res);
            //console.log(res);
        })
    },
    new: function (newBurger, callBack) {
        //console.log(newBurger)
        orm.insertOne("burgers", newBurger, function (res) {
            callBack(res);
            //console.log(res);
        })
    },
    eat: function (eaten, burger_id, callBack) {
        console.log(eaten,burger_id)
        orm.updateOne("burgers", eaten, burger_id, function (res) {
            callBack(res);
            // console.log(res);
        })
    }
};
// export this stuff
module.exports = burger;