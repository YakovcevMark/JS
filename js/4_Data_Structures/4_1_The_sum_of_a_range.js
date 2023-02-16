/*
The sum of a range

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to
(and including) end.

Next, write a sum function that takes an array of numbers and
returns the sum of these numbers. Run the example program and see
whether it does indeed return 55.

As a bonus assignment, modify your range function to take an
optional third argument that indicates the “step” value used when
building the array. If no step is given, the elements go up by
increments of one, corresponding to the old behavior. The function
call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*************
Please make sure it works correctly with such cases:
range(10, 1) -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] Hint: the default value of a parameter can be set dynamically
Skipped part "range(10, 1, 2) -> [10, 8, 6, 4, 2]"
*************
 */
"use strict";
function range(start, end, step =  start > end ? -1 : 1) {
    let arr = [];
    if (step < 0)
        for (let i = start; i >= end; i += step)
            arr.push(i);
    else
        for (let i = start; i <= end; i += step)
            arr.push(i);
    return arr;
}
function sum(args) {
    let sum = 0;
    for (let arg of args)
        sum += arg;
    return sum;
}

console.log(sum(range(1, 10)));
console.log(range(10, 1));
console.log(range(10, 1, -2));