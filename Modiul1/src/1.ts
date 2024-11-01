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
  // AnonymouseFunction
  const func4 = function (x: number): number {
    console.log("Hello from Anonymous Function");
    return x;
  };
  //defult value function
  const func5 = (X: number = 23): number => {
    return X * 2;
  };

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
}
