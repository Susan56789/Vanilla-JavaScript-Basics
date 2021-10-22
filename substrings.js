/*
A substring is a part or portion of a string.
Example: string.substring(indexStart,indexEnd);
indexStart: the position of the first character you'd like to include
indexEnd: the position of the first character you'd like to ignore
*/

const language ="JavaScript";
console.log(language.substring(1,4));

function skipFirstCharacter(text){
    return text.substring(1);
}
console.log(skipFirstCharacter("Hello"));
console.log(skipFirstCharacter("World"));