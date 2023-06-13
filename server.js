//load express 
const express = require('express');
const path = require('path');
//create app
const app = express();
app.set('view engine', 'ejs');

//require the students 
const studentsDb = require('./data/students');


//define 'root' directly on app 
app.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/students', function (req, res) {
    // console.log(res.locals.studentsNames);
    // res.send(res.locals.studentsNames);
    res.render('index', {
        students: studentsDb.getAll()
        // students: studentsDb.getAll()
    });
});

//tell app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});