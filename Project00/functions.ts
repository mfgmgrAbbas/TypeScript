// TypeScript Functions
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime()); // 1671629805923


/* If no return type is defined, TypeScript will attempt to infer it 
through the types of the variables or expressions returned. 

Void Return Type
The type void can be used to indicate a function doesn't return any value.*/


function hello(): void {
    console.log("Hello");
    
}

hello(); // Hello

/* Parameters
Function parameters are typed with a similar syntax as variable declarations.*/

function multiply (a: number, b: number) {
    return a * b;
}
console.log(multiply(15, 20)); // 300


/* Optional Parameters
By default TypeScript will assume all parameters are required, 
but they can be explicitly marked as optional.*/

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number){
    return a + b + (c || 0 )
}

console.log(add(10, 20, 30)); // 60
console.log(add(10, 20)); // 30

/* Default Parameters
For parameters with default values, 
the default value goes after the type annotation:*/

function pow (a: number, exponent: number = 10) {
    return a ** exponent
}

console.log(pow(2)); // 1024

/*Named Parameters
Typing named parameters follows the same pattern as typing normal parameters.*/

function divide({dividend, divisor}: {dividend:number, divisor: number}){
    return dividend / divisor;
}

console.log(divide({dividend: 50, divisor: 10})); // 5

/* Rest Parameters
Rest parameters can be typed like normal parameters,
 but the type must be an array as rest parameters are always arrays.*/

 function add1(a: number, b: number, ...rest:number[]){
    return a + b + rest.reduce((p, q) => p+ q , 0);

 }

console.log(add1(10, 20, 30, 40, 50)); // 150


/* Type Alias
Function types can be specified separately from functions with type aliases.

These types are written similarly to arrow functions, read more about arrow functions */

type Negate = (value:number) => number;

const neagteNumber : Negate = (value) => value * 10

console.log(neagteNumber(20)); // 200




