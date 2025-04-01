const Bill = require("../models/Bill.js");
const express = require("express");


const router = express.Router();



router.get("/get-bills",async(req,res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post ("/add-bill",async(req,res) => {
    try {
        const newbill = new Bill(req.body)
        await newbill.save();
        res.status(200).json("bill added")
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;