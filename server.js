//server.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//Connecting to Database
mongoose.connect('mongodb://localhost:27017/contactList');

mongoose.connection.on('error', function(){
    console.log('Could not connect to database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log('Successfully connected to database');
});

//Routes
require('./routes/contactList.routes.js')(app);

//Config
app.listen(8080, function(){ 
    console.log('App listening on port 8080');
});