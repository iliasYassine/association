

const assoc = require('../model/ModelAssociation');


///fonction1
exports.assoc = function (req, res) {
   console.log(req.body);
   console.log(req.body.nom);
   const assoc1 = assoc.build({ nom:req.body.nom, adr: req.body.adr, tel: req.body.tel, email: req.body.email,siret: req.body.siret,siteWeb: req.body.siteWeb,description: req.body.description, password: req.body.password });
   console.log(req.body);
   console.log(req.body.nom);

   assoc1.save().then((e) => {
      if (e) console.log(e);
      console.log('ilias was saved to the datsabase!');
      res.send('association bien creer');
   })
}

 
////fonction 2 ////////////// GET ALL //////////////////////////////////
exports.getAllAssoc = function(req,res){ 
    assoc.findAll().then(assoc => {
   console.log("users: ", assoc);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(assoc);
}
)}

//// fonction findbypk///////////////////////////////////////////////
exports.FindByPK = function(req,res){
    assoc.findByPk(1).then(assoc => {
      console.log("association",assoc);
   })
   res.json(assoc);
}

/// fonction 3
 //////////////////// update ////////////////////////////////////////
 
exports.updateAssoc=function(req,res){
 console.log("on entre dans le UPDATE");
 assoc.findOne({where:{id:req.body.id}}).then(assoc =>{
   //user.create({nom:req.body.name,prenom:req.body.prenom,adrrr:req.body.adrrr,tel:req.body.tel,email:req.body.email,password:req.body.email})

   assoc.nom=req.body.nom;
   assoc.adr=req.body.adr;
   assoc.tel=req.body.tel;
   assoc.email=req.body.email;
   assoc.siret=req.body.siret;
   assoc.siteWeb=req.body.siteWeb;
   assoc.description=req.body.description;
   assoc.password=req.body.password;
   console.log(assoc);
   assoc.save();
   
   res.send("assoc bien modifier ")
})

 }
   
/// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteAssoc=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
   assoc.destroy({
  where: {
    
    id:req.body.id
  }
});

// Truncate the table
assoc.destroy({
   truncate: true
 });
res.json("association bien supprimé")
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
    assoc.findOne({ email: req.body.email })
        .then(assoc => {
          if (!assoc) {
            return res.status(401).json({ error: 'association non trouvé !' });
          }
          bcrypt.compare(req.body.password, assoc.password)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              res.status(200).json({
                userId: assoc.id,
                token: jwt.sign(
                  { userId: assoc.id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
              });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    };
   
