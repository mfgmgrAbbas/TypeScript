/* A type system is the set of rules for how a programming language
understands what types the constructs in a program may have.
At its core, TypeScript’s type system works by:
Reading in your code and understanding all the types and values in
existence
For each value, seeing what type its initial declaration indicates it may
contain
For each value, seeing all the ways it’s used later on in code
Complaining to the user if a value’s usage doesn’t match with its type
*/

const firstName = "Abbas"
const nameLength = firstName.length() // it gives error taking red underline
// ~~~~~~
// This expression is not callable.
// Type 'Number' has no call signatures
