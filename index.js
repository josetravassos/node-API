const express = require('express');
const app = express();

//Import Routes
const authRouter = require('./routes/auth');

//Middlewares
app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up and running'));
