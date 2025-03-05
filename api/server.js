const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const port = 5001;

dotenv.config();

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("connect mongoDB")
   } catch (error) {
      throw error
   }
}

app.get("/",(req,res) => res.send("hello world"))

app.listen(port,() => {
   connect();
   console.log(`Ex app listening on port ${port}`) 
})