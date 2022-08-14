import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes/index.js';

const app = express();
const port = process.env.BACK_PORT;

app.use(express.json());
app.use(router);

const run = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      authSource: 'admin',
    });
    app.listen(port, () => {
      console.log(`Server started on port : ${port}`);
    });
  } catch (e) {
    throw new Error(e);
  }
};

run().catch((error) => console.error(error.stack));
