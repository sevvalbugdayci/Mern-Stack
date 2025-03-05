const mongoose = require("mongoose");


const CategoryShema = mongoose.Schema(
    {
        title : {type : String,required : true},
    },
    {timestamps : true}
)


const Category = mongoose.model("categories",CategoryShema)
module.exports = Category;