var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user@cluster0-dipkp.mongodb.net/test?retryWrites=true&w=majority');

app.use('/api/v1',restRouter);

app.listen(3000,function () {
    console.log('App listening on port 3000!')
});