function sumOddNumbers(numbers){
    let sum =0;
    numbers.forEach(function(add){
let x = add % 2;
if(x != 0){
    sum = sum + add;
}
    });
    return sum;
}

console.log(sumOddNumbers([15,5,10]));
console.log(sumOddNumbers([2, 3, 4, 5, 6]));