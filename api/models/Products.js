const mongoose = require("mongoose");


const ProductShema = mongoose.Schema(
    {
        title : {type : String,required : true},
        image : {type : String,required : true},
        price : {type : Number , required : true},
        category : {type : String , required : true}
    },
    {timestamps : true}
)


const Product = mongoose.model("Products",ProductShema)
module.exports = Product;