export{};
class Box<S,A> {
    name: S ;
    id: A ;
    constructor(name: S, id: A){
      this.name = name;
      this.id = id;
    }
  }
  // temp to class to object;
  const bx = new Box<string,number>("Sohaib!",1);
       console.log(bx);
      
 // const b1=new Box<number>(2);
 // console.log(b1);

   
 // const c1=new Box<boolean>(true);
  //console.log(c1);

  /*general class*/

  class Box1<S,A> {
    name: S ;
    id: A ;
    constructor(name: S, id: A){
      this.name = name;
      this.id = id;
    }
  }
  // temp to class to object;
  const b = new Box<string,number>("Sohaib!",1);
       console.log(b);
      
 // const b1=new Box<number>(2);
 // console.log(b1);

   
 // const c1=new Box<boolean>(true);
  //console.log(c1);

  /*general class*/
