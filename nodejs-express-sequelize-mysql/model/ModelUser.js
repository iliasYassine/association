const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

const User = sequelize.define("user", {
  nom: DataTypes.TEXT,
  prenom: DataTypes.TEXT,
  adrrr: DataTypes.TEXT,
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

module.exports = User;
