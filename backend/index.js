import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";

import booksRoute from "./routes/booksRoute.js";
import transactionRoute from "./routes/transactionsRoute.js"

import { Book } from "./models/bookModel.js";
import { Transaction } from "./models/transactionModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow All Origins with Default of CORS
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// )

// Root page
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World");
});

// Middleware for handling routes regarding book schema
app.use("/books", booksRoute);

// Middleware for handling routes regarding transaction schema
app.use("/transactions", transactionRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });