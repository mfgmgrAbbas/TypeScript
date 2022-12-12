let rapper = "Queen Rapper";
rapper.length; // ok
rapper.push("!"); 
// ~~~~
// Property 'push' does not exist on type 'string'.

 let cher = {
    firstName: "Abbas",
    lastName: "Shah"
 };
 cher.middleName;
 // ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.
