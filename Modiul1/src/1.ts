{
  const name: string = "Sabbir bro ";
  const id: number = 12;
  const isAdmin: boolean = false;
  const hasAccess: null = null;
  const hasRole: undefined = undefined;
  const roton: {
    firstName: string;
    lastName: string;
    age: number;
    IsPhStudent: boolean;
    Friends: string[];
    adress?: string; // / ? means Optional
    PhoneNumber: number;
  } = {
    firstName: "ema",
    lastName: "jhonn",
    age: 20,
    IsPhStudent: true,
    Friends: ["abul", "babul", "kabul", "mogbul"],
    PhoneNumber: 121,
  };
  //tuple
  const tupleArray: [number, string] = [827382, "as"];
  //Any Type
  // function func1 (x,y:any){  //X and Y is Any type now couse not assign the type abar any o acta type kintu
  //     return x + y ;
  // }
  //function
  // Normal Function
  function func2(x: number, y: number): string {
    return `X squre value is ${x * x} and Y squre value is  ${y * y}`;
  }
  // Arrow Function
  const func3 = (x: number[]): number => {
    const result = x.reduce((acc, current) => acc + current, 0);
    // console.log(result);
    return result;
  };
  // console.log(func3([1,2,3,4,95]));
  // AnonymouseFunction asas
  const func4 = function (x: number): number {
    console.log("Hello from Anonymous Function");
    return x;
  };
  //defult value functionsds
  const func5 = (X: number = 23): number => {
    return X * 2;
  };

  
{
  // Type Alias as

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "0170000000",
    address: "ctg",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  const student3: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}

  //TypeAlias
  type Student = {
    //NameAlias
    name: "github.com"; //ata change kora jabe na .
    roll: number;
    isStudent: boolean;
    age: number;
    area?: string;
  };
  const student1: Student = {
    name: "github.com",
    roll: 12,
    isStudent: true,
    age: 20,
  };

//method
const greeting ={
  name : 'string',
  greet(){
    console.log(`Hello ${this.name}`);
  }
}

//Spreed operator  and union operator
const numb : number[] =[1,2,3,4,5,6,7,8,9]
const NameOfFriends :string[] =  ['roton', 'bob', 'fred','Fred']
const newArr : (number|string)[] = [...numb, ...NameOfFriends]   // | is Union operator

const user = { name: "Alice", age: 25 };
const clonedUser = { ...user, location: "New York" };
console.log(clonedUser); // Output: { name: 'Alice', age: 25, location: 'New York' }



//Rest operators and intersection operators
const func6 = (...arg : number[]) : number =>{
    const result = arg.reduce((acc , current)=> (acc + current),0)
    return result
}
console.log(func6(1,2,3,4,5,5,6,4,3,3,3)); // that means  it used to  function unknown parameter sending 
//object example 

const person : {
  pheroName: string ;
  isAdmin : boolean;
  Contract ?: number ;
} ={
  pheroName : 'Mezbah Vai ',
  isAdmin: true,
}
const {pheroName , ...rest} = person
console.log(name); //mezvah vai 
console.log(rest); // {isAdmin : true }


{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({ isAdult });

  //nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentaddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
  //
}


{
  // nullable types / unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  // unknown  typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(null);

  //never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");

  //
}








}
