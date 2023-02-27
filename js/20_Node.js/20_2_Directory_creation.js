/*
Though the DELETE method in our file server is able to delete directories
(using rmdir), the server currently does not provide any way to create
a directory.

Add support for the MKCOL method (“make collection”),
which should create a directory by calling mkdir from the fs module.
MKCOL is not a widely used HTTP method,
but it does exist for this same purpose in the WebDAV standard,
which specifies a set of conventions on top of HTTP that make it
suitable for creating documents.
 */
const directory = process.argv[2];
const {mkdirSync} = require("fs");
let methods = Object.create(null);
methods.MKCOL = dir => {
    try {
        mkdirSync(dir);
        console.log("Successful folder creation");
    } catch (err) {
        if (err.code === "EEXIST")
            console.log("File already exist");
        else throw err;
    }
};
methods.MKCOL(directory);

