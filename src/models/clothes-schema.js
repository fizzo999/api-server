'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: { type: String, required: true }, // required property for an item
  color: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: false}
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
