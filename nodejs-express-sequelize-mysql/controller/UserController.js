

const user = require('../model/ModelUser');
var bcrypt = require('bcrypt');

const jwtToken = require('../controller/jwtToken')
///fonction1
exports.user = function (req, res) {
   console.log(req.body);
   console.log(req.body.nom);
   const ilias = user.build({ nom:req.body.nom, prenom: req.body.prenom, adrrr: req.body.adrrr, tel: req.body.tel, email: req.body.email, password: req.body.password });
   console.log(req.body);
   console.log(req.body.nom);
   console.log(ilias.nom);
   ilias.save().then((e) => {
      if (e) console.log(e);
      console.log('ilias was saved to the datsabase!');
      res.send('user bien creer');
   })
}

 
////fonction 2 ////////////// GET ALL //////////////////////////////////
exports.getAllUser = function(req,res){ 
   user.findAll().then(users => {
   console.log("users: ", users);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(users);
}
)}

//// fonction findbypk///////////////////////////////////////////////
exports.FindByPK = function(req,res){
   user.findByPk(1).then(users => {
      console.log("users",users);
   })
   res.json(users);
}

/// fonction 3
 //////////////////// update ////////////////////////////////////////
 
exports.updateUser=function(req,res){
 console.log("on entre dans le UPDATE");
  user.findOne({where:{id:req.body.id}}).then(user =>{
   //user.create({nom:req.body.name,prenom:req.body.prenom,adrrr:req.body.adrrr,tel:req.body.tel,email:req.body.email,password:req.body.email})

   user.nom=req.body.nom;
   user.prenom=req.body.prenom;
   user.adrrr=req.body.adrrr;
   user.tel=req.body.tel;
   user.email=req.body.email;
   user.password=req.body.password;
   console.log(user);
   user.save();
   
   res.send("user bien modifier ")
})

 }
   
/// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteUser=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
 user.destroy({
  where: {
    
    id:req.body.id
  }
});

// Truncate the table
 user.destroy({
   truncate: true
 });
res.json("utilisateur bien supprimé")
} 

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
   //////////////////LOGIN/////////////////////////////

   /////////////////////////////////////////////////
   ///////////////////////////////////////////////
   exports.login = function(req, res, next)  {
     var email= req.body.email;
     var password=req.body.password;

     if (email==null ||  password == null){
       console.log("dans le 1er if ")
       return res.status(400).json({'error ': 'missing pramameters'});
     }
      
     user.findOne({
       where: {email: email}
     })
     .then(function(userFound){
        if(userFound){
          console.log("dans le 2er if ")
          
      console.log("userFound password : " +userFound.password)
      ////////////////////////////////////////////////////////////////////////////////////
          bcrypt.compare(password,userFound.password, function(errBycrypt,resBycrypt){
            //////////////////////////////////////////////////////////////////////////////
            console.log("apres le bcrypt.compare")
            console.log(req.body.password);
            console.log("userFound password : " +userFound.password)
            console.log(password);
      
             console.log("userFound password : " +userFound.password);

            console.log(resBycrypt);

      /////ici le problem resBycrypt est a FFFFFFFFFFFAAAAAAAAAAAAAAAAAAALLLLLLLLLLLLLLLLLLSSSSSSSSSSSSEEE false
            if(resBycrypt){
              console.log("dans le 3er if ")
              return res.status(200).json({
                'userId':userFound.id,
                'token': jwtToken.generatetoken(userFound)
              });

            }else{

              console.log(req.body.password);
              console.log("userFound password : " +userFound.password)
                return res.status(403).json({"error ":"invalide password"});
            }
          });
        }else{
          return res.status(404).json({'error':'user not exist in bdd'});
        }


     })
     .catch(function(err){
      console.log(req.body.email);
      console.log(email);
      console.log(password);
      console.log(req.body.password);
       return res.status(500).json({'error':'unable to verify user'});
     });
     
        
    };
   