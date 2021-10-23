

var advert = require('../model/ModelAdvertisments');


exports.advert = function(req, res) {
   
    const advertisment = advert.build({ titre:req.body.titre,decription:req.body.decription });
    ///console.log(advertisment instanceof user); 
    
       advertisment.save().then((e)=>{
         if(e)console.log(e);
        console.log('advertisment was saved to the database!');
        res.send('advertisment bien creer');
     })
     
}


////fonction2
exports.getAllAdvertisments = function(req,res){ 
   advert.findAll().then(adv => {
   console.log("advertisments: ", adv);
/// je renvoi ma fonction json avec en parametre mes users 
   res.json(adv);
}
)}


/// fonction 4 /////////////DELETE  /////////////////////////////////

exports.deleteAdvertisment=function (req, res) {
   console.log("delete bien entree dedans ")
   // Delete everyone with id 
 advert.destroy({
  where: {
    
    id:req.body.id
  }
});

// Truncate the table
 advert.destroy({
   truncate: true
 });
res.json("advert bien supprimé")
} 
