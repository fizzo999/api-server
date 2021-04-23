'use strict';

const express = require('express');

const clothesSchema = require('../models/clothes-schema.js');
const GenericModel = require('../models/data-collection-class.js');
const clothes = new GenericModel(clothesSchema);


const router = express.Router();

router.get('/clothes', getManyClothes);
router.get('/clothes/:id', getOnePieceOfClothes);
router.post('/clothes', createOnePieceOfClothes);
router.put('/clothes/:id', updateOnePieceOfClothes);
router.delete('/clothes/:id', deleteOnePieceOfClothes);

function getManyClothes(req, res) {
  let allClothes = clothes.read();
  res.status(200).json(allClothes);
}

function getOnePieceOfClothes(req, res) {
  const id = parseInt(req.params.id);
  let onePieceOfClothes = clothes.read(id);
  res.status(200).json(onePieceOfClothes);
}

function createOnePieceOfClothes(req, res) {
  let item = req.body;
  let createdPieceOfClothing = clothes.create(item);
  res.status(201).json(createdPieceOfClothing);
}

function updateOnePieceOfClothes(req, res) {
  const id = parseInt(req.params.id);
  let item = req.body;
  let successMessageForUpdate = clothes.update(id, item)
  res.status(200).json(successMessageForUpdate);
}

function deleteOnePieceOfClothes(req, res) {
  const id = parseInt(req.params.id);
  let successMessageForDelete = clothes.delete(id);
  res.status(200).json(successMessageForDelete);
}

module.exports = router;
