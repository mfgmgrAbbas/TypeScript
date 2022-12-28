// import a from "./first.js";
// import {b, c} from "./second.js";

// console.log(a + b + c);

import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Please enter your age here"
}]);

console.log("Insha Allah, in " + (60 - answers.age) + " year you will be 60 year old.");
