
const {check} = require('express-validator')
const validation = require('../utils/validationUtils')

const calculateValidation = [

    check("first_digited_number").exists().notEmpty(),
    check("second_digited_number").exists().notEmpty(),
    check("operation_simbol").exists().notEmpty(),

    (req,res,next)=>{

        validation(req,res,next)
    }

]


module.exports = {calculateValidation}