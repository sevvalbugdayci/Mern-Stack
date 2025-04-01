const mongoose = require("mongoose");


const UserShema = mongoose.Schema(
    {
        username : {type : String,required : true},
        email : {type : String,required : true},
        password : {type : String , required : true},
    },
    {timestamps : true}
)


const User = mongoose.model("Users",UserShema)
module.exports = User;