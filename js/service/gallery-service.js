'use strict'

var gProjs = []


function createProjs(){
   const proj1 = _createProject('Touch_Nums','Can you do it?', 'Touch all numbers in order', 'https://mirlsmith.github.io/ca-touch-nums/' )
   const proj2 = _createProject('Minesweeper', 'Lets Play!', 'Flag the mines and reveal safe spaces','https://mirlsmith.github.io/ca-minesweeper/' )
   const proj3 = _createProject('To-Dos', 'Keep track', 'Make a list to keep track of your todos','https://mirlsmith.github.io/ca-todos/')

   gProjs = [proj1,proj2,proj3]
}

function getProjs(){
    return gProjs
}

function getProjById(projId){
    return gProjs.find(proj => projId === proj.id)
}

function _createProject(name, title, desc, url){
    return {
        id: name.toLowerCase(),
        name,
        title,
        desc, 
        url,
        publishedAt: new Date(),
        labels: ["Matrixes", "keyboard events"]
    }
}