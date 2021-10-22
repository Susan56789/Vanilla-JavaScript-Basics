const users = ['Mike','Ivy','Esther','Doug','Pauline']; 
const grades = [10,11,9,8,15]; //array of numbers
const attendees = ['Jane','Alex','Sue']; //Array of strings
const values = [10, false,'Mary']; //mixed

console.log(grades.length);
console.log(users[1]);

//adding an element
const numbers = [11,4,67,23];
numbers.push(23,11);
console.log(numbers);


function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
    }
    
    console.log(useCalculator(["Clock", "Twitter"])); 
    console.log(useCalculator(["Weather"])); 