module.exports = function (sequelize, DataTypes) {
    console.log("burger-model")
    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
    return burger;
};
