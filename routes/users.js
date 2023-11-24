

const express = require('express')
const router = express.Router()

const {createAnUser,getAllUsers,getAnUser,updateUser,deleteUser,usersLogin} = require('../controllers/users')
const {createUserValidator} = require('../validations/userValidation')


router.post("/users",createUserValidator,createAnUser)
router.get("/users",getAllUsers)
router.get('/users/:id',(req, res) => getAnUser(req, res, req.params.id))
router.put('/users/:id',(req,res)=>updateUser(req,res,req.params.id))
router.delete('/users/:id',(req,res)=>deleteUser(req,res,req.params.id))
router.post('/users/login',usersLogin)

module.exports = router




