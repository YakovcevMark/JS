/*
Write a Node script that can be run from the command line and acts
somewhat like grep. It treats its first command line argument as a
regular expression and treats any further arguments as files to search.
It should output the names of any file whose content matches the regular
expression.

When that works, extend it so that when one of the arguments is a directory,
it searches through all files in that directory and its subdirectories.
 */
"use strict";
const directories = process.argv.filter((item,index) => index > 2 );
const regularExpression = new RegExp(process.argv[2]);
const {statSync,readdirSync,readFileSync} = require("fs");
let findFiles = [];
directories.forEach(directory => find(directory));
function find(file) {
    let stats = statSync(file);
    if (stats.isDirectory()){
        for (let f of readdirSync(file))
            find(file + "/" + f);
    } else if (regularExpression.test(readFileSync(file,"utf8")))
        findFiles.push(file);
}
console.log(findFiles);
