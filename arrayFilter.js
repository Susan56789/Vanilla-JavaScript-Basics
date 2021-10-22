const grades = [10,2,21,35,50,-10,0,1];

//get all grades > 20
const result = grades.filter(grade => grade > 20);

// get all grades > 30
const results = grades.filter(grade => grade > 30);

console.log(result);
console.log(results);


let numbers = [9,5,14,3,11,43];
let numbersAboveTen = numbers.filter(function(number){
    return number >=10;
});
console.log(numbersAboveTen);


function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature > 0;
    });
}
console.log(getPositiveTemperatures([0,-5, 12, 3]));
console.log(getPositiveTemperatures([1, -3, -2, 4, 10]));

// .filter() method always returns an array. Even if it's empty.

function getOddYears(years) {
    return years.filter(function(year) {
        return year % 2 !== 0;
      });
    }
    console.log(getOddYears([2019, 2020, 2021])); 
    console.log(getOddYears([2000, 2015, 2018, 2020])); 
    