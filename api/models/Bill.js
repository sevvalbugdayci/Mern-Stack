const mongoose = require("mongoose");


const BillShema = mongoose.Schema(
    {
        customerName : {type : String,required : true},
        phoneNumber : {type : String,required : true},
        paymentMode : {type : String , required : true},
        subTotal : {type : Number , required : true},
        totalAmount : {type : Number , required : true},
        cartItems : {type : Array , required : true},
        tax : {type : Number , required : true},
    },
    {timestamps : true}
)


const Bill = mongoose.model("Bills",BillShema)
module.exports = Bill;