/* Union | (OR)
Using the | we are saying our parameter is a string or number:*/

function printStatusCode (code: string | number) {
    console.log(`my status is ${code}`);
    
}

printStatusCode("Good"); // my status is Good
printStatusCode(1) // my status is 1

/* Union Type Errors
Note: you need to know what your type is 
when union types are being used to avoid type errors:*/

function printStatusCode1(code: number | string) {
    console.log(`My status code is ${code.toUpperCase}`); // // error: Property 'toUpperCase'
    
    
}