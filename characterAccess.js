//you can access a specific character in a string by using the square brackets syntax []
/*
The index starts at 0.
The first character is index 0
*/ 

function getFirstCharacter(name){
    return name[0];
}
console.log(getFirstCharacter("Kenya"));
console.log(getFirstCharacter("Egypt"));

function getLastCharacter(name){
    return name[name.length-1];
}
console.log(getLastCharacter("August"));
console.log(getLastCharacter("September"));