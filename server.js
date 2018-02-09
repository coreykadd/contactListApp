//server.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var contactList = require('./public/models/contactList.model.js');

/*app.get('/', function(req, res){
    res.send('Hello World');
});*/

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/contactList');

mongoose.connection.on('error', function(){
    console.log('Could not connect to database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log('Successfully connected to database');
});

app.get('/contactList', function(req, res){
    console.log('Recieved get request');

    person1 = {
        name: 'Tim',
        email: 'email@email.com',
        number: '0851290182'
    };

    person2 = {
        name: 'John',
        email: 'random@email.ie',
        number: '0872290193'
    };

    person3 = {
        name: 'Sarah',
        email: 'yeah@email.com',
        number: '0891044791'
    };

    var contactList = [person1, person2, person3];
    res.json(contactList);
});

app.listen(8080, function(){ 
    console.log('App listening on port 8080');
});