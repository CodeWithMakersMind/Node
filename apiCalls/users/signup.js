const { success, failure, ErrorCodes } = require("../../libs/response-libs")
const dbQueries = require("../../database/dbQueries")
const config = require("../../config.json");

module.exports.main = async function(req){
    try{
        let body = req.body
        if(body && body.fullName && body.mobile && body.email && body.password && 
            body.fullName !== "" && body.mobile !== "" && body.email !== "" && body.password !== ""){

                let filter = {
                    email : body.email,
                    mobile : body.mobile,
                }

                const existOrNot = await dbQueries.findOne(config.usersTableName, filter);
                if(existOrNot){
                    return failure(ErrorCodes.BAD_REQUEST, {status:false, error: "Email or Mobile Nunber already Exists"})
                }
                
                const item = {
                    fullName : body.fullName,
                    email : body.email,
                    mobile : body.mobile,
                    password : body.password
                };
                
                console.log("..........:", item)
            const createuser = await dbQueries.create(config.usersTableName, item);
            console.log("createuser..........:", createuser)
            return success({status:true, data: body});
        }
    }catch(error){
        console.log("error.........:", error);
        return failure(ErrorCodes.ERROR, {status:false, error: "Please try again"})

    }
}