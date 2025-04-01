const Product = require("../models/Products.js");
const express = require("express");

const router = express.Router();


router.get("/get-all",async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error)
    }
})



router.post("/add-products", async(req,res) => {
    try {
        const newProducts = new Product(req.body);
        await newProducts.save();
        res.status(200).json("products added succesfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put("/update-product",async(req,res) => {
    try {
        await Product.findOneAndUpdate({ _id : req.body.ProductId },req.body);
        res.status(200).json("product updated succesfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


router.delete("/delete-product" , async(req,res) => {
    try {
        await Product.findOneAndDelete({_id : req.body.ProductId}, req.body);
        res.status(200).json("item deleted succesfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router;