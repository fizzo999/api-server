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

async function getManyClothes(req, res) {
  let allClothes = await clothes.read();
  res.status(200).json(allClothes);
}

async function getOnePieceOfClothes(req, res) {
  const id = req.params.id;
  let onePieceOfClothes = await clothes.read(id);
  res.status(200).json(onePieceOfClothes);
}

async function createOnePieceOfClothes(req, res) {
  let item = req.body;
  let createdPieceOfClothing = await clothes.create(item);
  res.status(201).json(createdPieceOfClothing);
}

async function updateOnePieceOfClothes(req, res) {
  const id = req.params.id;
  let item = req.body;
  let successMessageForUpdate = await clothes.update(id, item)
  res.status(200).json(successMessageForUpdate);
}

async function deleteOnePieceOfClothes(req, res) {
  const id = req.params.id;
  let successMessageForDelete = await clothes.delete(id);
  res.status(200).json(successMessageForDelete);
}

module.exports = router;
