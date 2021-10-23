
var job_comp = require('../model/ModelJob_application');


exports.job_comp = function(req, res) {
    const job_comp_var = job_comp.build({ salaire: req.body.salaire,langage_info: req.body.langage_info,langues:req.body.langues });
    
    console.log(job_comp_var.nom); 
    job_comp_var.save().then((e)=>{
         if(e)console.log(e);
        console.log('companie est bien integrer dans la bdd!');
        res.send('companie bien creer  bien creer');
     })
   };

////fonction2
exports.getAllJob_companie = function(req,res){ 
   job_comp.findAll().then(comp1 => {
   console.log("job_application: ", comp1);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(comp1);
}
)}

////////////fonction DELETE /////////////////////////////
exports.deleteJobApplication=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
 job_comp.destroy({
  where: {
    //id: "1"
    id:req.body.id
  }
});

// Truncate the table
 job_comp.destroy({
   truncate: true
 });
res.json("utilisateur bien supprimé")
} 
