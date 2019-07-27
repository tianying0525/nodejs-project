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


var getProblems = function(){
    return new Promise((resolve,reject)=>{
        resolve(problems);
    });
};

module.exports = {
    getProblems:getProblems
}