'use strict';

// const ClothesModel = require('../models/clothes.js');

// class FoodModel extends ClothesModel {
//   constructor() {
//     this.id = 0;
//     this.db = [];
//   }
// }

class FoodModel {

  constructor() {
    this.id = 0;
    this.foodDataBase = [];
  }

  create(obj){
    let record = {
      id: ++this.id,
      record: obj
    }

    this.foodDataBase.push(record);
    return record;
  }

  read(id) {
    if (id) {
      return this.foodDataBase.find(record => record.id === id);
    } else {
      return this.foodDataBase;
    }
  }

  update(id, obj) {
    // PLACEHOLDER
    if(id) {
      let itemToBeUpdated = this.foodDataBase.find(record => record.id === id);
      console.log('======================================', itemToBeUpdated);
      let index = this.foodDataBase.indexOf(itemToBeUpdated);
      console.log('======================================', index);
      this.foodDataBase[index] = {
        id: id,
        record: obj
      }
      console.log('======================================', this.foodDataBase[index]);
      return obj;
    }
  }

  delete(id) {
    if(id) {
      let deletedItem = this.foodDataBase.splice(id-1, 1);
      return `successfully deleted item ${deletedItem}`;
    }
  }

};



module.exports = FoodModel;
