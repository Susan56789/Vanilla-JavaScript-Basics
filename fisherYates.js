const points = [40,100,1,5,25,10];

for(let i = points.length -1; i>0; i--){
    let j = Math.floor(Math.random()*i);
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}
console.log(points);

/*
instead of using sort() to sort in a random order, we
use the fisher Yates method.
the sort() method will favor some numbers over the other
*/