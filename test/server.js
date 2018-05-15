const expect = require('chai').expect;
const request = require('request');
const server = require('../server.js');


describe('listen', ()=>{
  it('loads the main page content', function(done){
    request('http://localhost:8000/api', function(error, response, body){
      expect(body).to.include('Hello, World!');
      done();
    })
  })

  it('connects to the server', function(done){
    request('http://localhost:8000/api', function(error, response, body){
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
})
