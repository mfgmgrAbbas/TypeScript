// export{}

// // strong typed syntex
// let a:string = "Abbas Shah";
// a = "Shah g";

// let b: number = 2500;
// b = 3000;

// let c:boolean = true;

// // type interface

// let d = "peer sab";

// let e = 2000;

// let f = false;

// let g = true;

// Declare a fresh object
let myObject = {
    data: "Hello, world!",
    fresh: true
  };
  
  // Check if the object is fresh
  if (myObject.fresh) {
    console.log("Object is fresh, processing data...");
    // Process the data in the object
    let processedData = doSomethingWithData(myObject.data);
    console.log("Processed data:", processedData);
  
    // Steal the object to mark it as stale
    myObject.fresh = false;
  } else {
    console.log("Object is stale, skipping processing...");
  }
  
  // Declare a function to process the data in an object
  function doSomethingWithData(data: string): string {
    // Do some processing on the data
    return data.toUpperCase();
  }
  