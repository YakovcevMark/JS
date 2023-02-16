/*
Flattening

Use the reduce method in combination with the concat method
to “flatten” an array of arrays into a single array that has
all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]
********************
What is going to happen if arrays[1] is undefined? If arrays[0] is undefined?
Lets assume that undefined is valid item of the array. Please handle arrays[0] == undefined case so it doesn't throw error.
********************
 */
"use strict";
let arrays = [undefined, [4, 5], [6]];
console.log(arrays.reduce((item,nextItem) => item.concat(nextItem),[]));