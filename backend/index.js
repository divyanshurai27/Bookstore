import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

import  bookRoute from './routes/book.routes.js';
import userRoute from './routes/user.route.js';

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

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/book",bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})