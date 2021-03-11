const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Conect to DB
mongoose.connect(
  'mongodb+srv://zehtra:mongo0013@cluster0.xohxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => console.log('connected to db!')
);
//Import Routes
const authRouter = require('./routes/auth');

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

//Middlewares
//app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up and running'));
