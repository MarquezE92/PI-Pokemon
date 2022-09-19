
const request = require('supertest');
const app = require('../../src/app.js');
const { Type, conn } = require('../../src/db.js');

describe('Type routes', () => {
  beforeAll(async()=> {
    await conn.sync({force: true});
  })

  describe('GET/types', ()=>{
    it('should return status 200 and the list of all types', async()=>{
      const res = await request(app).get('/types');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {"name":"normal"},
        {"name":"fighting"},
        {"name":"flying"},
        {"name":"poison"},
        {"name":"ground"},
        {"name":"rock"},
        {"name":"bug"},
        {"name":"ghost"},
        {"name":"steel"},
        {"name":"fire"},
        {"name":"water"},
        {"name":"grass"},
        {"name":"electric"},
        {"name":"psychic"},
        {"name":"ice"},
        {"name":"dragon"},
        {"name":"dark"},
        {"name":"fairy"},
        {"name":"unknown"},
        {"name":"shadow"}
        ])
    })
  });
})