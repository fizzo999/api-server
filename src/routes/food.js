'use strict';

const express = require('express');

const foodSchema = require('../models/food-schema.js');
const GenericModel = require('../models/data-collection-class.js');
const food = new GenericModel(foodSchema);

const router = express.Router();

router.get('/food', getManyfood);
router.get('/food/:id', getOnePieceOffood);
router.post('/food', createOnePieceOffood);
router.put('/food/:id', updateOnePieceOffood);
router.delete('/food/:id', deleteOnePieceOffood);

function getManyfood(req, res) {
  let allfood = food.read();
  res.status(200).json(allfood);
}

function getOnePieceOffood(req, res) {
  const id = parseInt(req.params.id);
  let onePieceOffood = food.read(id);
  res.status(200).json(onePieceOffood);
}

function createOnePieceOffood(req, res) {
  let item = req.body;
  let createdPieceOfClothing = food.create(item);
  res.status(201).json(createdPieceOfClothing);
}

function updateOnePieceOffood(req, res) {
  const id = parseInt(req.params.id);
  let item = req.body;
  let successMessageForUpdate = food.update(id, item)
  res.status(200).json(successMessageForUpdate);
}

function deleteOnePieceOffood(req, res) {
  const id = parseInt(req.params.id);
  let successMessageForDelete = food.delete(id);
  res.status(200).json(successMessageForDelete);
}

module.exports = router;
