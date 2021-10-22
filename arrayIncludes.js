/*
.includes() method takes an item and returns true when
the item exists in the array and false if it doesn't
*/

const groceries = ['Apple','Orange','Tomato','Onion']

console.log(groceries.includes('Bread'))
console.log(groceries.includes('Tomato'))

/*
Complete the function isAppUsed such
 that it returns true when the app parameter 
 it receives exists in the apps parameter, 
 and false otherwise.
*/
function isAppUsed(apps, app) {
    return apps.includes(app)
    }
     console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); 
    console.log(isAppUsed(["Clock", "Calculator"], "Safari")); 