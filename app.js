var express = require('express');
var app = express();
var google = require('googleapis');
//var api = require('./quickstart');



app.use('/', express.static('public'));


// app.get('/calendar-events',express.static('public'));


app.listen(3007, function () {
    console.log('Example app listening on port 3007!');
    console.log('http://localhost:3007/');
});

