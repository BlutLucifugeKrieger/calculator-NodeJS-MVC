const {validationResult} = require("express-validator")

const validation=(req,res,next)=>{

    try {
        
         validationResult(req).throw()
         return next()

    } catch (error) {
        
        res.status(403)
        console.error({errors:error.message})
    }

    
}

module.exports = validation