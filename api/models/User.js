const mongoose = require("mongoose");


const UserShema = mongoose.Schema(
    {
        userName : {type : String,required : true},
        email : {type : String,required : true},
        password : {type : String , required : true},
        verify : {type : Boolean , required : true}
    },
    {timestamps : true}
)


const User = mongoose.model("Users",UserShema)
module.exports = User;