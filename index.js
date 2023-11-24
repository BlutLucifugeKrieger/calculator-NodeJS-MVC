require('dotenv').config()
const express = require('express')
const app = express()
const morganBody = require('morgan-body')
const cors = require('cors')
const port = process.env.PORT || 3000
const dbConnection = require('./config/mongo')


app.use(express.json())
app.use(cors())
morganBody(app,{})

app.use("/api",require("./routes/users"))
app.use("/api",require("./routes/calculator"))


app.listen(port,()=>{

    console.log(`Servidor corriendo en el puerto ${port}`)


})

dbConnection()


