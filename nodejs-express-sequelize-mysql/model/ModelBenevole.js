const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

const BENEVOLE = sequelize.define("benevole", {
  nom: DataTypes.TEXT,
  prenom: DataTypes.TEXT,
  tel: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT

}
);

/// synchoniser le modele avec la bdd 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = BENEVOLE;
