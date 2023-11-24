
const {matchedData} = require('express-validator')
const {calculatorModel} = require('../models/index')
const uuid = require('uuid')
const numberOperation = require('../utils/operationMethod')
const error_utils = require('../utils/errorUtils')





const getAllOperations = async (req,res)=>{


    try {
        
        const result = await calculatorModel.find()
        res.send({result})

    } catch (error) {
        
        error_utils(res,"error al obtener todas las operaciones")
        console.error({errors:error.message00})
    }


}



const getAllOperationsOfAnUser = async (req,res,user_id) =>{

    try {
        
        const result = await calculatorModel.find({users_id:user_id})
        res.send({result})

    } catch (error) {
        
        error_utils(res,"error al obtener todos las oepraciones de un usuario")
        console.error({errors:error,message})

    }

}




const newOperation = async (req,res,user_id)=>{

    try {
        
        const body = matchedData(req)
        const id = uuid.v4()
        const users_id = user_id
        const first_digited_number = body.first_digited_number
        const second_digited_number = body.second_digited_number
        const operation_simbol = body.operation_simbol
        const result = numberOperation(first_digited_number,second_digited_number,operation_simbol)
        const data = await calculatorModel.create({id,users_id,first_digited_number,second_digited_number,operation_simbol,result})
        res.send({data})

    } catch (error) {
        
        error_utils(res,"error al crear una operacion")
        console.error({errors:error.message})
    }   


}


const updateAnOperation = async (req,res,id)=>{

    
    try {
        
        const first_digited_numbers = req.body.first_digited_number
        const second_digited_numbers = req.body.second_digited_number
        const operation_simbols = req.body.operation_simbol
        const results = numberOperation(first_digited_numbers,second_digited_numbers,operation_simbols)
        const data = await calculatorModel.updateOne({id:id},{first_digited_number:first_digited_numbers, second_digited_number:second_digited_numbers,operation_simbol:operation_simbols,result:results})
        res.send({data})

    } catch (error) {
        
        error_utils(res,"error al actualizar la operacion")
        console.error({errors:error.message})
    }

}


const deleteAnOperation = async (req,res,id)=>{


    try {
        
        const result = await calculatorModel.deleteOne({id:id})
        res.send({result})

    } catch (error) {
        
        error_utils(res,"error al eliminar esta operacion")
        console.error({errors:error.message})
    }
}




module.exports = {newOperation,getAllOperationsOfAnUser,getAllOperations,updateAnOperation,deleteAnOperation}