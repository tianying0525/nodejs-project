var problems = [{
    id: 1,
    name: "Problem 1",
    desc: "hello",
    difficulty: "easy"
},
    {
        id: 2,
        name: "Problem 2",
        desc: "darkness",
        difficulty: "hard"
    },
    {
        id: 3,
        name: "Problem 3",
        desc: "my old friend",
        difficulty: "hard"
    }];

var ProblemModel = require('../models/problemModel');

var getProblems = function(){
    return new Promise((resolve,reject)=>{
        ProblemModel.find({},function (err,problems) {
            if(err){
                reject(err);
            }else{
                resolve(problems);
            }
        })
    });
};

var getProblem = function(id){
    return new Promise((resolve,reject)=>{
        ProblemModel.findOne({id:id},function (err,problem) {
            if(err){
                reject(err);
            }else{
                resolve(problem);
            }
    });

    });
};

var addProblem = function(newProblem){
    return new Promise((resolve,reject)=> {
        ProblemModel.findOne({name:newProblem.name},function (err,problem) {
            if(problem){
                reject("Problem name already exist!");
            }else{
                ProblemModel.count({},function (err,num) {
                    newProblem.id = num+1;
                    var mangoProblem = new ProblemModel(newProblem);
                    mangoProblem.save();
                    resolve(newProblem);
                });
            }
        });
    });
};

module.exports = {
    getProblems:getProblems,
    getProblem:getProblem,
    addProblem:addProblem,
}