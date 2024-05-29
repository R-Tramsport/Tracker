import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

import booksRoute from "./routes/booksRoute.js";

import { Book } from "./models/bookModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Root page
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World");
});

// Middleware for handling routes regarding book schema
app.use("/books", booksRoute);

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