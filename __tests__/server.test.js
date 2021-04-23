'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER TESTING:', () => {

  it('should respond with a 404 on not found', async () => {
    const response = await mockRequest.get('/no-thing')
    expect(response.status).toBe(404);
    });

  // it('should create a new item in the db', async () => {
  //   const response = await mockRequest.post('/clothes/10').send({name: test_subject});
  //   expect(response.status).toBe(201);
  //   expect(response.body.record.name).toEqual('test_subject');
  //   console.log('==================================', response.body.record);
  // });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    // console.log('===========================================', response);
  });

  it('should retieve all items from the db', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
  });

  // it('should retieve all items from the db', async () => {
  //   const response = await mockRequest.delete('/clothes/1');
  //   expect(response.status).toBe(200);
  // });

});
