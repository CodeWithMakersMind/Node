const mongoose = require("mongoose");
const config = require("../../config.json");

const usersSchema = new mongoose.Schema({
    fullName : { type : String, required : true },
    email : { type : String, required : true },
    mobile : { type : String, required : true },
    password : { type : String, required : true }
})

module.exports = 
    mongoose.models[config.usersTableName] ||
    mongoose.model(config.usersTableName, usersSchema)