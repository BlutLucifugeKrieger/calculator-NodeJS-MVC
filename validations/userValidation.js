const {check} = require("express-validator")
const validation = require("../utils/validationUtils")

const createUserValidator=[

    
    check("username").exists().notEmpty(),
    check("firstname").exists().notEmpty(),
    check("lastname").exists().notEmpty(),
    check("password").exists().notEmpty(),

    (req,res,next)=>{

        validation(req,res,next)
    }


]






module.exports = {createUserValidator}