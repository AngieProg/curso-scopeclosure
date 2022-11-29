//variables

var a; //declarando la variable a
var b = 'b'; //declaramos y asignamos 
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración 

//Global scope
var fruit = 'Apple';
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);