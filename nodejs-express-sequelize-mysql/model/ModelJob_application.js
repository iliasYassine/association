const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

const job_companie = sequelize.define("job_companie", {
    salaire: DataTypes.TEXT,
    langage_info: DataTypes.TEXT,
    langues: DataTypes.TEXT
}
);

/// synchoniser le modele avec la bdd 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();



module.exports = job_companie;
