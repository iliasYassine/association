

const sdf = require('../model/ModelSdf');


///fonction1
exports.sdf = function (req, res) {
   console.log(req.body);
   console.log(req.body.nom);
   const sdf1 = sdf.build({ nom:req.body.nom, prenom: req.body.prenom, tel: req.body.tel, password: req.body.password });
   console.log(req.body);
   console.log(req.body.nom);
   
   sdf1.save().then((e) => {
      if (e) console.log(e);
      console.log('ilias was saved to the datsabase!');
      res.send('user bien creer');
   })
}

 
////fonction 2 ////////////// GET ALL //////////////////////////////////
exports.getAllSdf = function(req,res){ 
   sdf.findAll().then(sdf => {
   console.log("users: ", sdf);
/// je renvoi ma fonction json avec en parametre mes sdf 
   res.json(sdf);
}
)}

//// fonction findbypk///////////////////////////////////////////////
exports.FindByPK = function(req,res){
   sdf.findByPk(1).then(sdf => {
      console.log("users",sdf);
   })
   res.json(sdf);
}

/// fonction 3
 //////////////////// update ////////////////////////////////////////
 
exports.updateSdf=function(req,res){
 console.log("on entre dans le UPDATE");
  sdf.findOne({where:{id:req.body.id}}).then(sdf =>{
   //user.create({nom:req.body.name,prenom:req.body.prenom,adrrr:req.body.adrrr,tel:req.body.tel,email:req.body.email,password:req.body.email})

   sdf.nom=req.body.nom;
   sdf.prenom=req.body.prenom;
   sdf.tel=req.body.tel;
   sdf.password=req.body.password;
   console.log(sdf);
   sdf.save();
   
   res.send("sdf bien modifier ")
})

 }
   
/// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteSdf=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
 sdf.destroy({
  where: {
    
    id:req.body.id
  }
});

// Truncate the table
 sdf.destroy({
   truncate: true
 });
res.json("sdf bien supprimé")
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
   
