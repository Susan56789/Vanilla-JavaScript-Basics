/*
.map() method alloys you 
to transform an array into another one
*/

const names = ['Sam','Alex']
const nem = names.map(function(name){
    return name.toLocaleUpperCase()
})
console.log(nem)

const numbers = [4,2,5,8]
const doubled = numbers.map(function(number){
    return number * 2
})
console.log(doubled)


/*
Complete the function getStringSizes 
such that it returns an array of the 
number of characters for every string
 it receives in the strings parameter.
*/
function getStringSizes(strings) {
    return strings.map(function(str){
        return str.length
    })
    }
    console.log(getStringSizes(["a", "abc"])); 
    console.log(getStringSizes(["Sam", "Alex", "Charlie"])); 
    console.log(getStringSizes(["Hello", "Blue"])); 
    