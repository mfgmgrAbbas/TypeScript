/* Casting with as

A straightforward way to cast a variable is using the as keyword, 
which will directly change the type of the given variable.*/

let x: unknown = "Syed Muhammad Abbas Shah";
console.log((x as string).length); // 24

/* Casting doesn't actually change the type of the data within the variable, for example the following code with not work as expected 
since the variable x is still holds a number. */

let y: unknown = 15

console.log((y as string).length); // prints undefined since numbers don't have a length

console.log((4 as string).length); /*Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. 
If this was intentional, convert the expression to 'unknown' first.*/

/* Casting with <>
Using <> works the same as casting with as.*/

let z: unknown = "Abbas Ali Shah";
console.log((<string>z).length); // 14

/* Force casting
To override type errors that TypeScript may throw when casting, 
first cast to unknown, then to the target type. */

let b = "Dildar Shah";
console.log(((b as unknown) as number).length) // prog.ts(2,40): error TS2339: Property 'length' does not exist on type 'number'.







