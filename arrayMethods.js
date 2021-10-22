const fruits = ['Banana','Orange','Apple','Mango'];

// join() method joins all array elements into a string
console.log(fruits.join("."));

//pop() method removes the last element from an array
fruits.pop();
console.log(fruits);

//push() method adds a new element to an array at the end
fruits.push('Kiwi');
console.log(fruits);

//shift() method removes the first array element and shifts all other elements to lower index
fruits.shift();
console.log(fruits);

//unshift() method adds a new element to an array at the beginning
fruits.unshift('Lemon');
console.log(fruits);

//deleting element. Changes deleted element to undefined
delete fruits[0];
console.log(fruits);

//length
console.log(fruits.length);

//splice() method adds new items to an array
fruits.splice(2,0,'Mango','Pears'); //add elements at 2nd position
console.log(fruits);

//using splice() to remove elements
fruits.splice(0,1); //removes first element
console.log(fruits);

//concat() method creates a new array by merging exisiting arrays
const Girls=['Jane','Mary'];
const Boys = ['Alex','John'];
const Teacher = ['Mango','Omondi'];
const Class = Girls.concat(Teacher,Boys);
console.log(Class);

//slice() method slices out a piece of an array into a new array
const citrus = fruits.slice(1); //slices out element 1
console.log(citrus);

//toString
console.log(fruits.toString());

//sort() method sorts an array alphabetically
console.log(fruits.sort());

//numeric sort. Provide a compare function to avoid incorrect output
const points = [40,100,1,5,25,10];
points.sort(
    function(a,b){
        return a-b}
        );
        console.log(points);


//reverse() method reversece the elements in an array
console.log(fruits.reverse());