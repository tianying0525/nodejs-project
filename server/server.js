var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var path = require("path");

mongoose.connect('mongodb+srv://user:user@cluster0-dipkp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } );

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1',restRouter);

app.use('/',indexRouter);

app.listen(3000,function () {
    console.log('App listening on port 3000!')
});

app.use(function(req, res)  {
    //send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') })

});