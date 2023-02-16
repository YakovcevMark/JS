/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray,
takes an array as argument and produces a new array that has the same
elements in the inverse order. The second, reverseArrayInPlace,
does what the reverse method does: it modifies the array given as
argument by reversing its elements. Neither may use the standard
reverse method.

Thinking back to the notes about side effects and pure functions
in the previous chapter, which variant do you expect to be useful in
more situations? Which one runs faster?

**************
Function reverseArrayInPlace runs faster, but I think another is more useful.
**************

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*******************
array.unshift(item) works ~250 times slower than array.push(item).
Please use push in your function and compare the speed of
reverseArray(arr) and reverseArrayInPlace(arr) when
arr = [1, 2, 3 ... 1000000].

In case of array = [1, 2, 3, 4, 5] the function will take 3 from array[2],
put it in temp variable and then put it back to the array[2].
Please get rid of this redundant step.
*******************
 */
"use strict";
function reverseArray(array){
    let answer = [];
    for (let i = array.length -1; i >= 0; i--)
        answer.push(array[i]);
    return answer;
}
function reverseArrayInPlace(array){
    for (let i = 0; i < array.length / 2; i++)
        [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]];
}

let arr = [];
for (let i = 1; i <= 1000000; i++){
    arr.push(i);
}

console.time("reverseArray");
console.log(reverseArray(arr));
console.timeEnd("reverseArray");

console.time("reverseArrayInPlace");
reverseArrayInPlace(arr);
console.log(arr);
console.timeEnd("reverseArrayInPlace");



