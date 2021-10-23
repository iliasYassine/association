const express = require('express')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize');
const route = require('./route/route.js')
var bodyParser = require('body-parser')
///////////////////////////////////////////////////
//////////////////////////////////////////////////


///// bodyparser///////
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
app.use('/', route);
//// connection front 
app.use(express.static("Jobboard_front-end"));  

/// ecoute sur le port  3000

app.listen(port, () => {
  console.log(`ecoute le port  http://localhost:${port}`)
})