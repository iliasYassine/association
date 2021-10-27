const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

const SDF = sequelize.define("sdf", {
  nom: DataTypes.TEXT,
  prenom: DataTypes.TEXT,
  tel: DataTypes.TEXT,
  password: DataTypes.TEXT
  
}
);

/// synchoniser le modele avec la bdd 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = SDF;
