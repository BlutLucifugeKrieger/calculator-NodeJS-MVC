const mongoose = require('mongoose')


const userScheme = new mongoose.Schema(

    {   
        users_id:{type:String,unique:true},
        username:{type:String},
        firstname:{type:String},
        lastname:{type:String},
        password:{type:String},
    },
    {   
        timestamps:true,
        versionKey:false

    }


)

module.exports = mongoose.model("users",userScheme)