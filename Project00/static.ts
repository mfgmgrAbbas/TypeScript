class Employee {
    static count:number=0;
    id:number=0;
    name:String;
    constructor(name:string){
        
        this.name=name;
        this.id= ++Employee.count;
    }
}
    let objE = new Employee("Sohaib");
    console.log(objE.id);
    
    let objE2 = new Employee("Aamir");
    console.log(objE2.id);
