

const error_utils = (res,message="Ocurrio un error",code=400)=>{

        res.status(code)
        res.send({errors:message})


}


module.exports = error_utils