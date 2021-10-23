////1/ partie conection avec sequelize l' orm 
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize');

///2/ definir le model : la nomenclature////// via un objet User 
const Companie = sequelize.define("companie", {
  nom: DataTypes.TEXT,
  adrrr: DataTypes.TEXT,
  tel: DataTypes.TEXT,
  email: DataTypes.TEXT,

}
);

///3/ synchoniser le modele avec la bdd 
(async () => {
  await sequelize.sync({ force: true });
  
})();


////4/ exporter vers le controller l'objet defni 
module.exports = Companie;



//// ccl : 4 compartiments dans model 1: connection avec orm 2 : definir le model 3: synchro avec bdd 4: exporter vers controller 