function sumPositiveNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(add){
        if(add >= 0){
            sum = sum + add;
        }
    });
    return sum;
}
console.log(sumPositiveNumbers([15, -5, 10])); 
console.log(sumPositiveNumbers([-3, 4, -2, 1]));