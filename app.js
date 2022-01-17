// console.log ("hello js");

// const fun = function(a, b) {
//     return a + b;
// }

// let a = 5;
// console.log(a ** 2);
// console.log(fun(1,2));

/********** HW 10 *******************/

console.log('1. ', `a${+'a'}as`);

function calculate(num1, num2, compute) {
    return compute(num1, num2);
}
console.log(calculate(10, 20, function (a, b)
{
    return a+b;
}
))

function fun(index) {
    if (index == 5) {
        return function (a, b) {
            return a + b;
        }
    } else {
        return function (a, b) {
            return a - b;
        }
    }
}
console.log(fun(5)(20, 22));

/*********** CW 11 ************************* */



