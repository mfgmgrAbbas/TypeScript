"use strict";
// console.bulb("Hello World!"); // to run this first we have to transpile it using "tsc" command. It will transpile all the files.
// output is an error and also give a index.js file where it doest not show error before run while in typescript it show error before run.
/* tsc
index.ts:1:9 - error TS2339: Property 'bulb' does not exist on type 'Console'.

1 console.bulb("Hello World!"); // to run this first we have to transpile it using "tsc" command. It will transpile all the files.
          ~~~~


Found 1 error in index.ts:1 */
// now fix this error
console.log("Hello World!"); // now transpile it again by runing "tsc" command. it successfully transpile it. now run the file by "node" command node index.ts
//Output Hellow World! 
