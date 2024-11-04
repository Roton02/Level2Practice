{
  {
    //Task 1: Basic Data Types and First Program
    const greeting: string =
      "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    console.log(greeting);
    const res = greeting;
  }
  {
    //Functions, Optional, and Literal Types
    type obj = {
      name: string;
      age: number;
      role?: string;
    };

    const func = (
      name: string,
      age: number,
      role?: "manager" | "mentor" | "student"
    ) => {
      return { name, age, role };
    };
    const res = func("rafi", 10);
  }
  {
    //Task 3: Object Types, Type Alias, & Literal Types
    type Person ={
        name: string;
        age: number;
        gender: "male" | "female" ,
        contactNo?: string;
        address: string;
        friends : string[]
    }


  }

  //
}
