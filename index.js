
/////////////////////////       packages        ///////////////////////////

const express = require("express");
const cors = require("cors");
const serverless = require('serverless-http');

const app = express()
app.use(express.json())
app.use(cors())

/////////////////////////       imports        ///////////////////////////

const config = require("./config.json");
const users = require("./routes/users");

/////////////////////////       routes calling        ///////////////////////////
app.use("/users", users)

module.exports.handler = serverless(app);


let port = config.port

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})