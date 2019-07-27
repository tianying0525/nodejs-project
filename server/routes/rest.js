var express = require('express');
var router = express.Router();
var problemServices = require('../services/problemService');

router.get('/problems',function(req,res){
    problemServices.getProblems()
        .then(problems => res.json(problems));
});

module.exports = router;