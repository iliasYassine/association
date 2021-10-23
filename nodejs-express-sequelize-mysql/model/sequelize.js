const { Sequelize } = require('sequelize');


// Connection a la bdd

console.log("teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest");

const sequelize = new Sequelize('association', 'root', "root", {
  dialect: 'mysql',
  host: 'localhost'
})


try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
    sequelize.query("Show DATABASES;").then(([results, metadata]) => {
      console.log('Base de données créée !');
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize;