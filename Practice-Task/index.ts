{
  {
    //Task 1: Basic Data Types and First Program
    const greeting: string =
      "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    // console.log(greeting);
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
    type Person = {
      name: string;
      age: number;
      gender: "male" | "female";
      contactNo?: string;
      address: string;
      friends: string[];
    };
    const res: Person = {
      name: "Rafi",
      age: 23,
      gender: "male",
      contactNo: "01712345678",
      address: "Dhaka",
      friends: ["Rana", "Taimur", "Shahin"],
    };
  }
  {
    // Task 4: Union and Intersection Types
    interface Book {
      name: string;
      author: string;
      year: number;
    }
    interface Magazine {
      name: string;
      publisher: string;
      contract: number;
    }
    type BookUnionMagazine = Book | Magazine;
    type BookIntersection = Book & Magazine

    const res1 : BookUnionMagazine = {
        name : 'Book Union',
        author : 'Book',
        year : 2022, 
        contract : 10000
    }
    const res2 : BookIntersection ={
        name : 'Book Intersection',
        publisher : 'Book',
        contract : 11,
        year : 2020 ,
        author : 'Book'
    }
  }
  {
    // Task 5: Function Type 
   const func = (x : string ) : string=>{
    const res = x.split('').reverse()
    return res.join('')
   }
   const res = func('hello')
  //  console.log(res);
  }
  {
    //Task 6: Spread and Rest Operators, Destructuring
    const number = (...number : number[]) : number =>{
      const res = number.reduce((a,b)=>(a+b), 0)
      return res
    }
    // console.log(number(23,45,23,43,5,342,32,434,34,34,23));
    // console.log(number(1,2,3,4,));
  }
  {
    //Task 7: Type Assertion and Narrowing
    const func = (x : string | number) : number =>{
      if(typeof x ==='string'){
        return (x as string).length
      }
      else if (typeof x === 'number'){
        return (x as number)*x
      }
      else {
        console.log('nai..........');
      }
    }
    console.log(func('roton' as string ));
    console.log(func(10 as number));
  }

  //
}
