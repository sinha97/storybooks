const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

//load routes
const auth = require('./routes/auth');

const app = express();

app.get('/', (req, res) => {
  res.send('It Works');
});

// Use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
