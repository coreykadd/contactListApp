//contactList.tests.js

var expect = require('chai').expect;
var request = require('request');
var mongoose = require('mongoose');

describe('Status and Connection', function(){
    it('Main Page status', function(){
        request('http://localhost:8080/', function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('Database Status', function(){
        mongoose.connection.once('open', function(){
            console.log('Successfully connected to database');
        });
    });
});