let express = require('express');
let app = express()
const router = express.Router();
const auth = require('../middleware/auth');
const user = require('../model/ModelUser');
const sdf = require('../model/ModelSdf')
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// router.get('/', (request, response) => {
//   console.log("le get marche bien ");
//   response.send('Page accoeuil')
// })
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

/// connecter avec front

// const path = require('path');

// router.get('/', (request, response) => {
//   response.sendFile(path.join(__dirname + '/../Jobboard_front-end/index.html'));
// })



//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// USER//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/// on connecte avec controller de user ///// post USER CREATE ///////
var user_controller = require('../controller/UserController');
router.post('/user/create', user_controller.user);
//,auth.verifyToken
/// get  USER////////
router.get('/user/get', user_controller.getAllUser);

//get finone userr/////////////
//router.get('/user/findOneUser', user_controller.findOneUser);
////////////update //////////////////////////////////////////////
router.put('/user/update/:id', user_controller.updateUser);

///////////////////finderpk////////////////////////////////
router.get('/user/findergetpk',user_controller.FindByPK);

////////////////DELETE USER///////  /////////////

router.delete('/user/delete/:id' ,user_controller.deleteUser);

////////////////////LOGIN/////////////////////////////////////

 router.post('/user/login',user_controller.login);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// SDF//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////// post SDF CREATE ///////
var sdf_controller = require('../controller/SdfController');
router.post('/sdf/create', sdf_controller.sdf);

/// get  SDF////////
router.get('/sdf/get', sdf_controller.getAllSdf);

//get finone userr/////////////
//router.get('/user/findOneUser', user_controller.findOneUser);

////////////update //////////////////////////////////////////////
router.put('/sdf/update/:id', sdf_controller.updateSdf);

///////////////////finderpk////////////////////////////////
router.get('/sdf/findergetpk',sdf_controller.FindByPK);

////////////////DELETE SDF///////  /////////////

router.delete('/sdf/delete/:id' ,sdf_controller.deleteSdf);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// BENEVOLES//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////// post BENEVOLES CREATE ///////
var benevole_controller = require('../controller/BenevoleController');
router.post('/benevole/create', benevole_controller.benevole);

/// get  SDF////////
router.get('/benevole/get', benevole_controller.getAllBenevole);

//get finone userr/////////////
//router.get('/user/findOneUser', user_controller.findOneUser);

////////////update //////////////////////////////////////////////
router.put('/benevole/update/:id', benevole_controller.updateBenevole);

///////////////////finderpk////////////////////////////////
router.get('/benevole/findergetpk',benevole_controller.FindByPK);

////////////////DELETE SDF///////  /////////////

router.delete('/sdf/delete/:id' ,benevole_controller.deleteBenevole);


/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// ASSOCIATION //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////// post BENEVOLES CREATE ///////
var association_controller = require('../controller/associationController');
router.post('/assoc/create', association_controller.assoc);

/// get  SDF////////
router.get('/assoc/get', association_controller.getAllAssoc);

//get finone userr/////////////
//router.get('/user/findOneUser', user_controller.findOneUser);

////////////update //////////////////////////////////////////////
router.put('/assoc/update/:id', association_controller.updateAssoc);

///////////////////finderpk////////////////////////////////
router.get('/assoc/findergetpk',association_controller.FindByPK);

////////////////DELETE SDF///////  /////////////

router.delete('/assoc/delete/:id' ,association_controller.deleteAssoc);





////////////////////LOGIN/////////////////////////////////////

 //router.post('sdf/login',sdf_controller.login);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;