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

async function getManyfood(req, res) {
  let allfood = await food.read();
  res.status(200).json(allfood);
}

async function getOnePieceOffood(req, res) {
  // const id = parseInt(req.params.id);
  const id = req.params.id;
  let onePieceOffood = await food.read(id);
  res.status(200).json(onePieceOffood);
}

async function createOnePieceOffood(req, res) {
  let item = req.body;
  let createdPieceOfClothing = await food.create(item);
  res.status(201).json(createdPieceOfClothing);
}

async function updateOnePieceOffood(req, res) {
  const id = req.params.id;
  let item = req.body;
  let successMessageForUpdate = await food.update(id, item)
  res.status(200).json(successMessageForUpdate);
}

async function deleteOnePieceOffood(req, res) {
  const id = req.params.id;
  let successMessageForDelete = await food.delete(id);
  res.status(200).json(successMessageForDelete);
}

module.exports = router;
