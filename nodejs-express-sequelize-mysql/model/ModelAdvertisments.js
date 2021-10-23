

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');



const advertisments = sequelize.define("advertisments", {
  titre: DataTypes.TEXT,
  decription: DataTypes.TEXT,

}
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = advertisments;