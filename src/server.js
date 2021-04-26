'use strict';

const express = require('express');
const app = express();


// this following code block is for running the tests only - it is already part of index.js
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // don't read into this, just add them
mongoose.connect(MONGODB_URI, options);


const logger = require('./middleware/logger.js');
// const validator = require('./middleware/validator.js');
const customClothesRoutes = require('./routes/clothes.js');
const customFoodRoutes = require('./routes/food.js');

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');



app.use(express.json());
app.use(logger);
app.use(customClothesRoutes);
app.use(customFoodRoutes);

app.get('/', (req, res) => {
  console.log('we are here');
  res.status(200).send('Stuffs working');
});

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server is up and running on http://localhost:${port}`);
    });
  }
};
