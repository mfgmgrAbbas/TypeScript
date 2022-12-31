export{}
// Declare a fresh object

let myObject = {
    data: "hello world!",
    fresh: true
};

// Check if object is fresh
if (myObject.fresh) {
    console.log("Object is fresh, processing data...");
    // process the data in the object
    let processedData = doSomethingWithData(myObject.data);
    console.log("Processed data: ", processedData);

    // Steal the object to mark it as stale
    myObject.fresh = false;
    
    
}else{
    console.log("Object is stale, skipping processing...");

    
}

// Declare a function to process the data in an object
function doSomethingWithData(data: string): string {
    // Do some processing on the data
    return data.toUpperCase();
}

doSomethingWithData("")