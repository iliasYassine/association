const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

const ASSOC = sequelize.define("association", {
  nom: DataTypes.TEXT,
  adr: DataTypes.TEXT,
  tel: DataTypes.TEXT,
  email: DataTypes.TEXT,
  siret: DataTypes.TEXT,
  siteWeb: DataTypes.TEXT,
  description: DataTypes.TEXT,
  password: DataTypes.TEXT

}
);

/// synchoniser le modele avec la bdd 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = ASSOC;
