'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: false}
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
