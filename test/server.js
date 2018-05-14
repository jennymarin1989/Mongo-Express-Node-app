import { expect } from "chai";
import request from "request";
import server from "../server.js";


describe('listen', ()=>{
  it('loads the main page content', function(done){
    request('http://localhost:8000', function(error, response, body){
      expect(body).to.equal('listening to port 8000');
      done();
    })
  })
})
