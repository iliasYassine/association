
var companievar = require('../model/ModelCompanies');

//
exports.companie = function(req, res) {
    const comp = companievar.build({ nom: req.body.nom,adrrr:req.body.adrrr,tel:req.body.tel,email:req.body.email });
    
    console.log(comp.nom); 
    comp.save().then((e)=>{
         if(e)console.log(e);
        console.log('companie est bien integrer dans la bdd!');
        res.send('companie bien creer  bien creer');
     })
};


////fonction2
exports.getAllcompanie = function(req,res){ 
   companievar.findAll().then(comp1 => {
   console.log("job_application: ", comp1);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(comp1);
}
)}


//////////////// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteCompanie=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
 companievar.destroy({
  where: {
    //id: "1"
    id:req.body.id
  }
});

// Truncate the table
 companievar.destroy({
   truncate: true
 });
res.json("utilisateur bien supprimé")
} 

