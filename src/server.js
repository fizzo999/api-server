'use strict';

const express = require('express');
const app = express();

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
