'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER TESTING:', () => {

  it('should respond with a 404 on route not found', async () => {
    const response = await mockRequest.get('/no-thing')
    expect(response.status).toBe(404);
    });

    it('should respond with a 404 on bad method', async () => {
      return mockRequest.patch('/food').then(data => {
        expect(data.status).toBe(404);
      });
    });

  // CREATE Database Tests =================================================

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/clothes').send({name: 'test_subject', color: 'test_color', price: 999, type: 'test_type'});
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('test_subject');
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({name: 'Schnitzel', calories: 999, type: 'MEAT'});
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('Schnitzel');
  });

   // READ Database Tests ================================================= 

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
    expect(response.body[0]._id).toBe('6086504193579a2522f843c6');
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(response.body[0]._id).toBe('60822dd5a608cb2dcedfb5c1');
  });

  // READ ONE Database Tests ================================================= 

  it('should retieve an item from the db', async () => {
    let newPieceOfClothing = await mockRequest.post('/clothes').send({name: 'test_skirt', color: 'test_color_blue', price: 999, type: 'test_type_skirt'});
    let id = newPieceOfClothing.body._id;
    const response = await mockRequest.get(`/clothes/${id}`)
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('test_skirt');
  });

  it('should retieve an item from the db', async () => {
    let newFoodItem = await mockRequest.post('/food').send({name: 'Schnitzel', calories: 999, type: 'MEAT'});
    let id = newFoodItem.body._id;
    const response = await mockRequest.get(`/food/${id}`)
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('Schnitzel');
  });

  // UPDATE ONE Database Tests ================================================= 

  it('should test for proof that an item from the db was updated', async () => {
    let updatedPieceOfClothing = {name: 'test_skirt111', color: 'test_color_blue111', price: 111, type: 'test_type_skirt111'}
    let originalPieceOfClothing = await mockRequest.post('/clothes').send({name: 'test_skirt999', color: 'test_color_blue999', price: 999999, type: 'test_type_skirt999'});
    let id = originalPieceOfClothing.body._id;
    const response = await mockRequest.put(`/clothes/${id}`).send(updatedPieceOfClothing);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(updatedPieceOfClothing.name);
  });

  it('should test for proof that an item from the db was updated', async () => {
    let updatedPieceOfFood = {name: 'Schnitzel111', price: 111, type: 'MEAT'}
    let originalPieceOfFood = await mockRequest.post('/food').send({name: 'Schnitzel999', calories: 999999, type: 'MEAT'});
    let id = originalPieceOfFood.body._id;
    const response = await mockRequest.put(`/food/${id}`).send(updatedPieceOfFood);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(updatedPieceOfFood.name);
  });

  // DELETE ONE Database Tests ================================================= 

  it('should test for proof that an item from the db was deleted', async () => {
    let newPieceOfClothing = await mockRequest.post('/clothes').send({name: 'test_skirt', color: 'test_color_blue', price: 999, type: 'test_type_skirt'});
    let id = newPieceOfClothing.body._id;
    let response = await mockRequest.delete(`/clothes/${id}`);
    expect(response.status).toBe(200);
    const response2 = await mockRequest.get(`/clothes/${id}`)
    expect(response2.body).toEqual(null);
  });

  it('should test for proof that an item from the db was deleted', async () => {
    let newPieceOfFood = await mockRequest.post('/food').send({name: 'Schnitzel', calories: 999, type: 'MEAT'});
    let id = newPieceOfFood.body._id;
    let response = await mockRequest.delete(`/food/${id}`);
    expect(response.status).toBe(200);
    const response2 = await mockRequest.get(`/food/${id}`)
    expect(response2.body).toEqual(null);
  });

});
