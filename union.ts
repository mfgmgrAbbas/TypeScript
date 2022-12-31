let myAge : string | number

myAge = 45

myAge = "don't know"
console.log(myAge.toString());

let newAge = Math.random() > 0.5 ? "Abbas" : 45
if (newAge == "Abbas"){
    console.log(newAge.toUpperCase);
    
}else{
    console.log(newAge);
    
}
if (typeof newAge === "string"){
    
}

function printId(id: number | string) {
    console.log("your Id: " + id);
    
}
printId(1001)
printId("1000")
// printId({myId: 1000}) 
/* Argument of type '{ myID: number; }' 
is not assignable to parameter of type 'string | number'*/

function printId1 (id: number | string) {
    // console.log(printId1.toUpperCase());
    /* Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.*/
}

//  narrowing
/* For example, 
TypeScript knows that only a string value will have a typeof value "string": */

function printId2(id: number | string){
    if (typeof id === "string"){
        console.log(id.toUpperCase());
        // In this branch, id is of type 'string'
    }else{
        console.log(id);
        // Here, id is of type 'number'
    }
}

//  Another example is to use a function like Array.isArray:
printId2("hello");
printId2(1255333);

function welcomeP(x: string[] | string){

    if (Array.isArray(x)){
        console.log("Hello, " + "," + x.join("and") );
        // Here: 'x' is 'string[]'
    }else{

        console.log("Welcome lone traveller, " + x);
         // Here: 'x' is 'string'
    }

}
welcomeP(["Abbas Shah", "Kamran", "Ali"]);
welcomeP("Abbas");

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string){
    return x.slice(0, 3)
}
getFirstThree([21])
