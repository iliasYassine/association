

const benevole = require('../model/ModelBenevole');


///fonction1
exports.benevole = function (req, res) {
   console.log(req.body);
   console.log(req.body.nom);
   const benevole1 = benevole.build({ nom:req.body.nom, prenom: req.body.prenom, tel: req.body.tel,email: req.body.email, password: req.body.password });
   console.log(req.body);
   console.log(req.body.nom);
   
   benevole1.save().then((e) => {
      if (e) console.log(e);
      
      res.send('benevole bien creer');
   })
}

 
////fonction 2 ////////////// GET ALL //////////////////////////////////
exports.getAllBenevole = function(req,res){ 
   benevole.findAll().then(benevole => {
   console.log("users: ", benevole);
/// je renvoi ma fonction json avec en parametre mes sdf 
   res.json(benevole);
}
)}

//// fonction findbypk///////////////////////////////////////////////
exports.FindByPK = function(req,res){
   benevole.findByPk(1).then(sdf => {
      console.log("benevoles",sdf);
   })
   res.json(benevole);
}

/// fonction 3
 //////////////////// update ////////////////////////////////////////
 
exports.updateBenevole=function(req,res){
 console.log("on entre dans le UPDATE");
  benevole.findOne({where:{id:req.body.id}}).then(benevole =>{
   //user.create({nom:req.body.name,prenom:req.body.prenom,adrrr:req.body.adrrr,tel:req.body.tel,email:req.body.email,password:req.body.email})

   benevole.nom=req.body.nom;
   benevole.prenom=req.body.prenom;
   benevole.tel=req.body.tel;
   benevole.password=req.body.password;
   console.log(benevole);
   benevole.save();
   
   res.send("benevole bien modifier ")
})

 }
   
/// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteBenevole=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
   benevole.destroy({
  where: {
    
    id:req.body.id
  }
});

// Truncate the table
benevole.destroy({
   truncate: true
 });
res.json("benevole bien supprimé")
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
//    exports.login = function(req, res, next)  {
//       sdf.findOne({ email: req.body.email })
//         .then(sdf => {
//           if (!sdf) {
//             return res.status(401).json({ error: 'sdf non trouvé !' });
//           }
//           bcrypt.compare(req.body.password, sdf.password)
//             .then(valid => {
//               if (!valid) {
//                 return res.status(401).json({ error: 'Mot de passe incorrect !' });
//               }
//               res.status(200).json({
//                 userId: sdf.id,
//                 token: jwt.sign(
//                   { userId: user.id },
//                   'RANDOM_TOKEN_SECRET',
//                   { expiresIn: '24h' }
//                 )
//               });
//             })
//             .catch(error => res.status(500).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
//     };
   
