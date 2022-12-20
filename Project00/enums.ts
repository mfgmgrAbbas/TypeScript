// Numeric Enums - Default

enum cardinalDirections{
    north,
    east,
    west,
    south

}
let currentDirection = cardinalDirections.north 
console.log(currentDirection); // 0


let east = cardinalDirections.east
console.log(east);  // 1

let south = cardinalDirections.south
console.log(south); // 3


// Numeric Enums - Initialized

enum cardinalDirections{
    North = 1,
    East,
    West,
    South

}
console.log(cardinalDirections.North); // 1
console.log(cardinalDirections.West); // 3

// Numeric Enums - Fully Initialized

enum currentCode {
    sucess = 4004,
    notfound = 4001,
    accepted = 5001,
    badrequest = 1222

}
console.log(currentCode.accepted); // 5001
console.log(currentCode.notfound);  // 4001

/* String Enums
Enums can also contain strings. 
This is more common than numeric enums, because of their readability and intent. */

enum directDirection {
    towardNorth = "North",
    towardsSouth = "South",
    towardsEast = "East",
    towardsWest = "West"
}

console.log(directDirection.towardNorth); // North
console.log(directDirection.towardsWest); // West

