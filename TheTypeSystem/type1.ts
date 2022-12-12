
const firstName = "Abbas"
const nameLength = firstName.length() // it gives error taking red underline

function sayMyName (fullname){
    console.log(`My full name is ${fullname}`);
    
}
sayMyName("Abbas", "Shah") /* also gives error because we one param while defining fumction now giving them two whcich 
not allowed in typeScript but it will run in js File.*/

// type of errors
/* Syntax
Blocking TypeScript from being converted to JavaScript
Type
Something mismatched has been detected by the type checker
The differences between the two are important.
*/
// Assignability

let fName = "Carole";
fName = "Joan";

let lName = "King";
lName = true;      // cannot assignment different data type.

// Type Annotations

let rocker;  // datatype any
rocker = "Rocket";
rocker.toUpperCase(); // works fine for string
rocker = 785.66 // data type int
rocker.toPrecision(1); // works fine fot int

rocker.toUpperCase(); // did not work because its data type chage to integer and to uppercase is string property

let rocker1 : string ;
rocker1 = "Hamza Ali"

let rocker2 : string;
rocker2 = 4528522  // gives error type number is not assignable to type string

let firstName1 : string = "Ali"
 let firstName2 : string = 1233 // will give error initated as string and given value number
 



