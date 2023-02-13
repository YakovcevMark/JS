/*
Implement every as a function that takes an array and a
predicate function as parameters.
Write two versions, one using a loop and one using the "some" method.
function every(array, test) {
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
 */
"use strict";
function firstEvery(array, test) {
    for (let item of array)
        if (!test(item))
            return false;
    return true;
}
function secondEvery(array,test){
    return !array.some(item => !test(item));
}
console.log(firstEvery([1, 3, 5], n => n < 10));
console.log(firstEvery([2, 4, 16], n => n < 10));
console.log(firstEvery([], n => n < 10));

console.log(secondEvery([1, 3, 5], n => n < 10));
console.log(secondEvery([2, 4, 16], n => n < 10));
console.log(secondEvery([], n => n < 10));