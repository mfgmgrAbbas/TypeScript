/* Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like 
string or more complex types such as objects and arrays:*/

type CarYear = number;
type CarModel = string;
type CarType = string;

type Car = {
    Year: CarYear;
    Model: CarModel,
    Type: CarType

}
const carYear:CarYear = 2001;
const carModel: CarModel = "Corolla";
const carType: CarType = "Toyota";

const car: Car = {
    Year: carYear,
    Model: carModel,
    Type: carType
}
console.log(car); // { year: 2001, type: 'Toyota', model: 'Corolla' }




