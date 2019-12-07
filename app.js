const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('It Works');
});

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
