'use strict';

class ClothesModel {

  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj){
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  read(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    // PLACEHOLDER
    if(id) {
      let itemToBeUpdated = this.db.find(record => record.id === id);
      console.log('======================================', itemToBeUpdated);
      let index = this.db.indexOf(itemToBeUpdated);
      console.log('======================================', index);
      this.db[index] = {
        id: id,
        record: obj
      }
      console.log('======================================', this.db[index]);
      return obj;
    }
  }

  delete(id) {
    if(id) {
      let deletedItem = this.db.splice(id-1, 1);
      return `successfully deleted item ${deletedItem}`;
    }
  }

};

module.exports = ClothesModel;
