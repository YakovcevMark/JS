/*
A list
Write a function arrayToList that builds up a list structure
like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list.
Then add a helper function prepend, which takes an element and a list and
creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the
given position in the list (with zero referring to the first element) or
undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
 */
"use strict";
function arrayToList(array){
    return array.reduceRight((rest,value) => ({value, rest}), null);
}
function listToArray(list){
    let array = [];
    for (let item = list; item; item = item.rest)
        array.push(item.value);
     return array;
}
function prepend(item,list){
    return { value: item, rest: list };
}
function nth(list,index){
    if (!list || index < 0)
        return undefined;
    if (index === 0 )
        return list.value;
    return  nth(list.rest,--index);
}
let myList = arrayToList([10, 20]);
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));