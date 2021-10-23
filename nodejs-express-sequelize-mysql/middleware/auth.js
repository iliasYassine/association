const jwt = require('jsonwebtoken');
const user = require('../model/ModelUser');


exports.verifyToken = function(req, res, next) {
  
  try {
    console.log("entre dans la fonction veriftoken");
    console.log(req.headers.authorization);
    console.log("le req.headeers.authorization reussie ");
    const authHeader = req.headers['authorization']
    console.log("athHeaders reussie ");
    const token = authHeader && authHeader.split(' ')[1]
    
     console.log("token est : " +token);
     
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    console.log("crash");
    console.log("//////////////////////////");
    console.log(decodedToken);
    console.log("/////////////////////////");
    const userId = decodedToken.id;
    console.log(decodedToken);
    if (req.body.id && req.body.id !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch (e){
  //  console.log(e);
  console.log("catch entrer ");
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};


