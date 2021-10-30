var jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET='ihli1996';

module.exports ={
    generatetoken: function(userdata){

        return jwt.sign({

            userId:userdata.id,
            isAdmin:userdata.isAdmin
        },
        JWT_SIGN_SECRET,
        {
                expiresIn:'1h'
        }
        
        
        
        )
        
    }
    
}