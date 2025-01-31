const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

// app.use(express.static('static'));

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose 
  .connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log('Connected MongoDB');
  })
  .catch((err)=>{
    console.error('Error connecting to MongoDB' , err.message);
  });

  app.get('/', (req, res) => {
   res.send('Customer Management System Backend Running')
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


