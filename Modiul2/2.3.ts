{
  //Genarice type

  type GenariceArry<T> = Array<T>;

  const number: GenariceArry<number> = [12, 23, 34, 54, 3, 2, 23];
  const name: GenariceArry<string> = ["a", "b", "c"];
  const boolArray: GenariceArry<boolean> = [true, false, false];

//   object 
const person : GenariceArry<{name:string , age : number }> = [{
    name: "Mezbah",
    age: 50
  }]

  //Genarice tupol 
  type GenariceTuple<x,y>= [x,y]

  const object : GenariceTuple<{name:string , age:number}, number> =[{
    name: "Mezbah",
    age: 50
  }, 11212]

  
  //
}
