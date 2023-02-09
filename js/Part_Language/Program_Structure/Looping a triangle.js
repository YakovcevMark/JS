/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
"use strict";
let myCheck = 0;
while (myCheck++ < 7){
    let temp = "";
    for (let i = 0; i < myCheck; i++){
        temp += "#";
    }
    console.log(temp);
}
