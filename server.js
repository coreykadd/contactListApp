//server.js

var express = require('express');
var app = express();

/*app.get('/', function(req, res){
    res.send('Hello World');
});*/

app.use(express.static(__dirname + '/public'));

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