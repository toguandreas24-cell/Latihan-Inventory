const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Item = require("./item")(sequelize, DataTypes);

module.exports = {
  sequelize,
  Item
};
