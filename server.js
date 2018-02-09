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

    contactList.find(function(err, data){
        if(err)
            res.send(err);
            
        console.log(data);
        res.json(data);
    });  
});

app.listen(8080, function(){ 
    console.log('App listening on port 8080');
});