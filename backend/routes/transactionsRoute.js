import express from "express";
import { Transaction } from "../models/transactionModel.js";

const router = express.Router();

// GET ALL transactions from database
router.get('/', async (request, response) => {
    try {
        const transactions = await Transaction.find({});
        return response.status(200).json({
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// GET a transaction from the database by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const transaction = await Transaction.findById(id);
        return response.status(200).json(transaction);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// POST a new transaction to the database
router.post('/', async (request, response) => {
    try {
        // Check if all required fields are filled
        if (
            !request.body.title ||
            !request.body.amount ||
            !request.body.type
        // If one of the required fields is not filled send error message
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, amount and type"
            });
        }
        const newTransaction = {
            title: request.body.title,
            description: request.body.description,
            category: request.body.category,
            amount: request.body.amount,
            type: request.body.type,
            isSpecial: request.body.false
        };

        const transaction = await Transaction.create(newTransaction);
        return response.status(201).send(transaction);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// EDIT a transaction in the database by ID
router.put('/:id', async (request, response) => {
    try {
        // Check if all required fields are filled
        if (
            !request.body.title ||
            !request.body.amount ||
            !request.body.type
        // If one of the required fields is not filled send error message
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, amount and type"
            });
        }
        const { id } = request.params;
        const result = await Transaction.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: "Transaction not found"});
        }
        return response.status(200).send({message: "Transaction updated successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// DELETE a transaction in the database by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Transaction.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({message: "Transaction not found"});
        }
        return response.status(200).json({message: "Transaction deleted successfully"});
    } catch (error) {
        onsole.log(error.message);
        response.status(500).send({message: error.message});
    }
})


export default router;