'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;


const MONGODB_URI = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // don't read into this, just add them
mongoose.connect(MONGODB_URI, options);

server.start(PORT);
// const foodSchema = require('./src/models/food-schema.js');
// const GenericCollection = require('./src/models/data-collection-class.js');

// const food = new GenericCollection(foodSchema);

// const databaseInteractions = async () => {

//   let pizza = {
//     name: 'pizza',
//     calories: 1200,
//     type: 'VEG'
//   }

//   let apple = {
//     name: 'apple',
//     calories: 30,
//     type: 'FRUIT'
//   }

//   let starfruit = {
//     name: 'starfruit',
//     calories: -55,
//     type: 'FRUIT'
//   }

//   let banana = {
//     name: 'banana',
//     calories: 30,
//     type: 'FRUIT'
//   }

//   let newFood = await food.create(pizza);
//   let moreFood = await food.create(apple);
//   let moreFood2 = await food.create(starfruit);
//   let moreFood3 = await food.create(banana);

//   console.log('create:', newFood);
//   console.log('create:', moreFood);
//   console.log('create:', moreFood2);
//   console.log('create:', moreFood3);

//   let oneFood = await food.read(newFood._id);
//   console.log('get one food item', oneFood);

//   let allFoods = await food.read();
//   console.log('THIS IS GIVING US ALL FOODS', allFoods);
// }

// databaseInteractions();


