// every nodejs file we created is its own module and any variable is scoped to that module
var path = require("path");

// var w = "Hello World";
// var justW = w.slice(6)
global.console.log(`Yo from ${path.basename(__filename)}`); //global name is assumed
// console.log(__dirname);
// console.log(__filename);
