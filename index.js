
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const connection = mongoose.connect(
  'mongodb+srv://kumawatrobin7:Robin@cluster0.ulve3cr.mongodb.net/ipl?retryWrites=true&w=majority&appName=Cluster0',

);


const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());

// app.use("/")

connection
  .then(() => {
    app.listen(port, () => {
      console.log('Server is started at ' + port);
    });
  })
  .catch((err) => {
    console.error('There is an ERROR:', err);
  });

