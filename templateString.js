//Template strings support interpolation
//Template strings start and end with a backtick ` character
// Template strings can span multiple lines

/*
Interpolation: you could write a variable in your string
and get its value.
*/
let language = "JavaScript";
console.log(`I am learning ${language}`);

function getMultilineString(str) {
    var str=`I am learning JavaScript  
             and I found it to be  
              quite fun!`;
    return str;
}
console.log(getMultilineString());