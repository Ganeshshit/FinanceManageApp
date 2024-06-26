import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router()

router.get("/transactions", async (req, res) => {
    try {
        const trasactions = await Transaction.find()
        res.status(200).json(trasactions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

export default router;