let names = ['Sam','Jane','Alex','Mary']

let result = names.find(function(name){
    return name === 'Alex'
})
console.log(result)

/*
.find() method returns the first item which matches
the condition that you specify.
If no items were found, you will get back undefined.
*/

let numbers = [9,5,14,3,11]
let firstNumberAboveTen = numbers.find(function(number){
    return number > 10
})
console.log(firstNumberAboveTen)


/*
Complete the function getYear such that it returns the 
searchYear (passed as 2nd parameter) when it's found in
 the array.
 Otherwise, it should return undefined.
*/
function getYear(years,searchYear){
    return years.find(function(year){
        return year === searchYear
    })
}
console.log(getYear([2019,2020,2021],2020))
console.log(getYear[2017,2021,2000],2021)
console.log(getYear[2019,2020,2021],1990)
