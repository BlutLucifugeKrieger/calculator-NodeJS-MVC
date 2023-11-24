const mongoose = require('mongoose')



const calculatorScheme = new mongoose.Schema(


        {

            id:{type:String},
            users_id:{type:String},
            first_digited_number:{type:Number},
            second_digited_number:{type:Number},
            operation_simbol:{type:String},
            result:{type:Number},

        },
        {
                timestamps:true,
                versionKey:false
        }




)

module.exports = mongoose.model("calculator",calculatorScheme)