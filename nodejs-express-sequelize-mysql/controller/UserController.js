

const user = require('../model/ModelUser');


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

////////////////////////////// SIGN UP  UTILISEE //////////////////////////
// exports.signup=function(req,res){
//   bcrypt.hash(req.body.password, 10)
//   .then(hash => {
//     const user = new User({
//       email: req.body.email,
//       password: hash
//     });
//     user.save()
//       .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//       .catch(error => res.status(400).json({ error }));
//   })
//   .catch(error => res.status(500).json({ error }));
// }


   //////////////////LOGIN/////////////////////////////
   exports.login = function(req, res, next)  {
      user.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
          }
          bcrypt.compare(req.body.password, user.password)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                  { userId: user.id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
              });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    };
   
