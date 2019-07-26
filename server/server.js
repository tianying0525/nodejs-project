var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Hello Express Word! again again')
})

app.listen(3000,function () {
    console.log('App listening on port 3000!')
})