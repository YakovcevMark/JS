/*
Deep comparison

Write a function deepEqual that takes two values and returns true only
if they are the same value or are objects with the same properties, where
the values of the properties are equal when compared with a recursive call
to deepEqual.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*******************
Works well, but there is too many nested ifs and too much nesting.
Please rework it with so called guard clauses.
*******************
 */
"use strict";
function deepEqual(a,b){
    if (a === b) return true;
    if (!((typeof a == "object" && a != null) && (typeof b == "object" && b != null))) return false;
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let key in a) {
        if (!(key in b)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,null));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));