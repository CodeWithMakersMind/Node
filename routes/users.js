
/////////////////////////       packages-setup       ///////////////////////////

const express = require("express");
const sandi = express.Router();

/////////////////////////       imports        ///////////////////////////
const { success, failure, ErrorCodes } = require("../libs/response-libs");
const signup = require("../apiCalls/users/signup")

/////////////////////////       APIS       ///////////////////////////

sandi.get("/test", (req, res) => {
    let data = failure(ErrorCodes.ERROR, { status : false, data : true })
    res.status(data.statusCode).json(JSON.parse(data.body));
})

sandi.post("/signup", async (req, res) => {
    let data = await signup.main(req)
    res.status(data.statusCode).json(JSON.parse(data.body));
})

module.exports = sandi;

// "mongoUrl": "mongodb+srv://Krishna:KTQ02MYd76IiRAD9@cluster0.8nxapw2.mongodb.net/sandi?retryWrites=true&w=majority",
