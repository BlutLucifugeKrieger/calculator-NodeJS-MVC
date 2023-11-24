const mongoose = require('mongoose')

const dbConnection = ()=>{

    const dbURL = process.env.db_string_connection
    mongoose.connect(dbURL,{

        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log("****CONEXION ESTABLECIDA CORRECTAMENTE****"))
      .catch((err)=> console.error({errors:err.message}))
}

module.exports = dbConnection