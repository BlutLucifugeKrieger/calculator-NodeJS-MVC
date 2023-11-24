const {matchedData} = require('express-validator')
const {usersModel} = require('../models/index')
const error_utils = require('../utils/errorUtils')
const uuid = require('uuid');



const getAllUsers = async (req,res)=>{

    try {
        
        
        const result = await usersModel.find()
        res.send({result})


    } catch (error) {
        
        error_utils(res,"Ocurrio un error en la obtencion de los usuarios")
        console.error({errors:error.message})

    }



}


const getAnUser = async(req,res,id)=>{

    try {
        
        const body = id
        console.log(body)
        const result = await usersModel.findOne({users_id:id})
        res.send({result})

    } catch (error) {
        
        error_utils(res,"Ocurrio un error en la obtencion de un usuario en particular")
        console.error({errors:error.message})
        
    }

}


const createAnUser = async (req,res)=>{

    try {

        const body = matchedData(req)
        const users_id = uuid.v4()
        const username = body.username
        const firstname = body.firstname
        const lastname = body.lastname
        const password = body.password
        const requestBody = {users_id,username,firstname,lastname,password}
        const data = await usersModel.create(requestBody)
        

    res.send({data})
        
    } catch (error) {
        
        error_utils(res,"Ocurrio un error en la creacion de la cuenta")
        console.error({errors:error.message})
    }
    


}



const updateUser = async (req, res, id) => {
    try {
        const usernames = req.body.username;
        const firstnames = req.body.firstname;
        const lastnames = req.body.lastname;
        const passwords = req.body.password;

        const result = await usersModel.updateOne(
            { users_id: id },
            { username: usernames, firstname: firstnames, lastname: lastnames, password: passwords }
        );

        res.send({ result });
    } catch (error) {
        error_utils(res, "Ocurrió un error al actualizar la cuenta");
        console.error({ errors: error.message });
    }
}


const deleteUser = async(req,res,id)=>{

    try {

        const result = await usersModel.deleteOne({users_id:id})
        res.send({result})



    } catch (error) {
        
        error_utils(res, "Ocurrió un error al eliminar la cuenta");
        console.error({ errors: error.message });

    }

}


const usersLogin = async (req,res)=>{

    try {
        
        const usernames = req.body.username
        const passwords = req.body.password
        const result = await usersModel.findOne({username:usernames,password:passwords})
        res.send({result})


    } catch (error) {
        
        error_utils(res,"error al iniciar sesion")
        console.error({errors:error.message})
    }
}

module.exports = { createAnUser, getAllUsers, getAnUser, updateUser,deleteUser,usersLogin};





