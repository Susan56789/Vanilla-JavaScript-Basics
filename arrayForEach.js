const grades = [10,8,13];

grades.forEach(function(grade){
    console.log(grade);
});

function loopThroughElements(elements) {
    elements.forEach(
       function (element){
            console.log(element)
       }
    );
    }
    
    loopThroughElements(["Sam", "Charlie", "Alex"]); 
    
//returning from loop
function sumGrades(grades) {

    let sum = 0;
        grades.forEach(function(grade) {
            sum = sum + grade;
            // or
            // sum += grade
        });
        return sum;
    }
    console.log(sumGrades([15, 5, 10]));
console.log(sumGrades([12, 10, 13, 19]));