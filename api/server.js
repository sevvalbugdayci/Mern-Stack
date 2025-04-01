const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const cors = require("cors");
const port = 5001;

dotenv.config();


//middleware

app.use(express.json());
app.use(cors());

//routes

const categoriyRoute = require("./routes/categories.js");

const productsRoute = require("./routes/products.js");

const billRoute = require("./routes/bill.js");

const authRoute = require("./routes/auth.js");

const userRoute = require("./routes/users.js");

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("connect mongoDB")
   } catch (error) {
      throw error
   }
}

app.use("/api/categories",categoriyRoute);
app.use("/api/products",productsRoute);
app.use("/api/bills",billRoute);
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute)

app.listen(port,() => {
   connect();
   console.log(`Ex app listening on port ${port}`) 
})