/*
Write a class called Group (since Set is already taken).
Like Set, it has add, delete, and has methods. Its constructor
creates an empty group, add adds a value to the group
(but only if it isn’t already a member),
delete removes its argument from the group (if it was a member),
and has returns a Boolean value indicating whether its argument
is a member of the group.

Use the === operator, or something equivalent such as indexOf,
to determine whether two values are the same.

Give the class a static from method that takes an
iterable object as argument and creates a group that contains
all the values produced by iterating over it.



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
***********************
Constructor might create an empty group.
Why you need a return statement here?
***********************
 */
"use strict";
class Group {
    values = [];
    add(item){
        /*
        Reuse has(item) function here.
         */
        if (!this.has(item))
            this.values.push(item);
    }
    delete(item){
        let index = this.values.indexOf(item);
        if (index !== -1)
            this.values.splice(index,1);
    }
    has(item){
        return this.values.includes(item);
    }
    static from(temp){
        let group = new Group();
        /*
        You need index only to access array's item. You don't use for each here?
         */
        if (temp) temp.forEach(item => group.add(item));
        return group;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
