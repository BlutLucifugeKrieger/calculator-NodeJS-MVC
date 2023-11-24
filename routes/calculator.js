
const express = require('express')
const router = express.Router()
const {newOperation,getAllOperationsOfAnUser,getAllOperations,updateAnOperation,deleteAnOperation} = require('../controllers/calculator')
const {calculateValidation} = require('../validations/calculatorValidation')

router.get('/calculator',getAllOperations)
router.get('/calculator/:user_id',(req,res)=>getAllOperationsOfAnUser(req,res,req.params.user_id))
router.post('/calculator/:user_id',calculateValidation,(req,res)=>newOperation(req,res,req.params.user_id))
router.put('/calculator/:id',(req,res)=>updateAnOperation(req,res,req.params.id))
router.delete('/calculator/:id',(req,res)=>deleteAnOperation(req,res,req.params.id))

module.exports = router