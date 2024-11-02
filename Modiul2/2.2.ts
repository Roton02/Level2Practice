{
  //Interface VS Type
  // type primitive non primitive 2 jaigay use kora jai  but interface only object (object , array , function ) kaj kore . 
  type user1 = {
    name: string;
    roll: number;
  };
  const user1: user1 = {
    name: "user1",
    roll: 1,
  };

  interface user2 {
    name: string;
    roll: number;
  }
  const user2: user2 = {
    name: "user2",
    roll: 2,
  };

  // practice using intersection that means & operator
  type user3 = user1 & {
    role : string ;
  }
  const user3: user3 = {
    name: "user3",
    roll: 3,
    role: "admin",
  };
  interface user4 extends user2{ role : string}
  const user4: user4 = {
    name: "user4",
    roll: 4,
  role: "manager",
  };
  // array 
  type users1 = string[] 
  const users : users1 = ['user1', 'user2', 'user3', 'user4']

  interface users2 {
    [index : number] : number
   }
const users6 : users2 = [123,23,43,1,2,12,3,23,34,1,21]

   
   //function 
   type Add =(x:number , y: number)=> number 
   const  add : Add = (x,y )=> x+y

   interface Add2{
    (x:number , y:number) : number
   }
   const  add2 : Add2 = (x,y )=> x+y


  //
}
