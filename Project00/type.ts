const firstName = "Abbas"
const nameLength = firstName.length() // it gives error taking red underline

function sayMyName (fullname){
    console.log(`My full name is ${fullname}`);
    
}
sayMyName("Abbas", "Shah") /* also gives error because we one param while defining fumction now giving them two whcich 
not allowed in typeScript but it will run in js File.*/
