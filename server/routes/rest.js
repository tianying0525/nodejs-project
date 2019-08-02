var express = require('express');
var router = express.Router();
var problemServices = require('../services/problemService');
var bodyParser = require('body-parser');
var jsonParse = bodyParser.json();



router.get('/problems',function(req,res){
    problemServices.getProblems()
        .then(problems => res.json(problems));
});

router.get('/problems/:id',function(req,res){
    var id = req.params.id;
    problemServices.getProblem(+id)
        .then(problem => res.json(problem))
        .catch(error=> {console.log(error)});
});

router.post('/problems',jsonParse,function (req,res) {
    problemServices.addProblem(req.body)
        .then(function(problem){
            res.json(problem);
        },function(error){
            res.status(400).send('Problem name already exit!')
        });
});

module.exports = router;