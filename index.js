const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//Conect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to db!')
);
//Import Routes
const authRouter = require('./routes/auth');

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

//Middlewares
//app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up and running'));
