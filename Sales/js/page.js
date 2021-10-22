//charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = Array.of(500,9000,3000);
let monthlyLabels = Array.of('Oct','Nov','Dec');

let deptSales = Array.of(12,9,3);
let deptLabels = Array.of('Hiking','Running','Hunting');

function addYearlyTotal(a,b,c){
    return a+b+c;
}

let octNums = Array.of(1200,1000,9000);
let novNums = Array.of(110,2000,9000);
let decNums = Array.of(4000,1000,5000);

let total = Array.of(addYearlyTotal(...octNums),addYearlyTotal(...novNums),addYearlyTotal(...decNums));
alert(addYearlyTotal(...total,9,3));

let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = "$" + yearlyTotal;

//Bar
