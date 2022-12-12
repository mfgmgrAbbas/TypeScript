// TypeScript correspond to the seven basic kinds of primitives in JavaScript:
/*
null
undefined
boolean // true or false
string // "", "Hi!", "abc123", …
number // 0, 2.1, -4, …
bigint // 0n, 2n, -4n, …
symbol // Symbol(), Symbol("hi"), …
For each of these values, TypeScript understands the type of the value to be
one of the seven basic primitives:
null; // null
undefined; // undefined
true; // boolean
"Louise"; // string
1337; // number
1337n; // bigint
Symbol("Franklin"); // symbol
*/

// String
let singer = "Aretha";
let bestSong = Math.random() > 0.5
    ? "Chain of Fool"
    : "Respect";
console.log(bestSong);



