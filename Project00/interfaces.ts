/* Interfaces
Interfaces are similar to type aliases, except they only apply to object types.*/

interface Rectangle {
    height: number,
    width: number

}

const Rectangle = {
    height: 20,
    width: 10
}

console.log(Rectangle);  // { height: 20, width: 10 }

/* Extending Interfaces
Interfaces can extend each other's definition.

Extending an interface means you are creating a new interface with the same properties 
as the original, plus something new. */

interface Rectangle {
    height: number,
    width: number
}

interface ColouredRectangle extends Rectangle {
    color: string
}

const ColouredRectangle: ColouredRectangle = {
    height: 20,
    width: 10,
    color: "Red"
}

console.log(ColouredRectangle); // { height: 20, width: 10, color: 'red' }

