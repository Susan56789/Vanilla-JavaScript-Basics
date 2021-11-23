//Example1
let state = 'FL';
let taxPercent;


if(state === 'FL'){
    taxPercent = 7;
} else{
    taxPercent = 0;
}

console.log(taxPercent);

//Example2
let price = 14;

if(price >= 15){
    console.log('price is more than 15');

}else if(price <= 5){
    console.log('price is not more than 5');
} else{
    console.log(`price is ${price}`)
}

//Example3
if(1 === "1"){
    console.log('true');
}else{
    console.log('false');
}
/**
 using '==' , javascript converts type, so the comparison becomes true
 using '===' , doesn't convert , so the comparison is false : 1 is a number, "1" is a string
 */