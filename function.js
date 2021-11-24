//you must return inside the function
//if you forget to write return. your function will return UNDEFINED
//the RETURN keyword will also exit the function

function sum(x,y){
    return x+y;
}

console.log (sum(1,3));
console.log(sum(7,9));

function multiply(a,b){
    return a*b;
}
console.log(multiply(6,5));
console.log(multiply(3,7));

let myfunction = function(message, firstname){
    return message + ' ' + firstname;
}
console.log(myfunction('Good afternoon', 'Mary'));