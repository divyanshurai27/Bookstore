import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";

import  bookRoute from './routes/book.routes.js';

const app = express()

dotenv.config();
const PORT  = process.env.PORT || 4000;
const uri = process.env.MongoDBurl;

try {
    await mongoose.connect(uri)
    console.log("mongoose connected" )
} catch (error) {
    console.log("Error:",error);
    process.exit(1);
}

app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})