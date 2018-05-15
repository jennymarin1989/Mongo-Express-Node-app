const expect = require('chai').expect;
const request = require('request');
const server = require('../server.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise


describe('listen', ()=>{

  describe('server connections',()=>{

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
  
    it('return error if connection is not successful', function(done){
      request('http://localhost:8000', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      })
    })
  });

  describe('database connections', ()=>{
    //before testing anything, I have to be sure I'm connecting to the db
    before(function(done){
      mongoose.connect('mongodb://localhost/mern-note');
      mongoose.connection.once('open', function(){
        console.log('connected to mongodb');
        done();
      }).on('error', function(){
        console.log('connection error');
      })
    })


  })


})
