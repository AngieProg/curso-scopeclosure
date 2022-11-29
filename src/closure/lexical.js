const myGlobal = 0;
function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //funcion interna   
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal); 
        }
        return child();
    }
    return parent();
}

myFunction();

/*function sumWithClosure(firstNum) {
    function suma(secondNum=0) {  
        console.log('Entro a function suma');
        let sum;
        sum = firstNum + secondNum;
        console.log (sum);
    }
    suma(3);
}
sumWithClosure(4);*/

function sumWithClosure(firstNum){
    return function (secondNum){
        return firstNum + secondNum;
    }
}

const sum1 = sumWithClosure(5);
const sum2 = sumWithClosure(10);

console.log(sum1(2));
console.log(sum2(2));


function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  if (Math.random() > 0.5) {
    const x = 1;
  } else {
    const x = 2;
  }
  console.log(x); // ReferenceError: x is not defined