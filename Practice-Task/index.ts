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
    const func = (x : string | number) : number | string | undefined =>{
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
    // console.log(func('roton' as string ));
    // console.log(func(10 as number));
  }
  {
    //Task 8: Intersection Types
    type user ={
      name : string , 
      age : number
    }
    type admin ={
      isAdmin : boolean
    }
    type userAdmin = user & admin
    const user = (user : userAdmin) =>{
      return user
    }
    const mezba = {name:'mezba', age:27 , isAdmin:true}
    // console.log(user(mezba));
  }
  {
    //Task 9: Optional Chaining
    interface employee {
      name : string ,
      age : number,
      department :{
        name : string,
        manager : {
          name : string,
          age ?: number
        }
      }
    }
    const getEmployee = (emploee : employee) : string=>{
      return emploee?.department?.manager?.name
    }
    const mezba : employee ={
      name:'mezba',
      age:27,
      department:{
        name:'IT',
        manager:{
          name:'Rafi',
        }
      }
    }
    // console.log(getEmployee(mezba));
  }
  {
    //Task 10: Nullish Coalescing
    const getHumaira = (x : string | undefined | null):string =>{
      return x ?? 'curi kore palabo'
    }
    // console.log(getHumaira('yes if you have a better carrier'));
    // console.log(getHumaira(null));
    // console.log(getHumaira(undefined));
  }
  {
    //Task 11: Unknown Type
    const  func = (X : unknown) =>{
      if (typeof X === "string") {
        return X.toUpperCase()
      }else if (typeof X === 'number'){
        return X*X
      }
    }
    // console.log(func('string'));
    // console.log(func(10));
  }
  {
    //Task 12: Never Type
    const func = (x : string ) : never =>{
        throw new Error(`This is an error ${x}`)
    }
    // func('string')
  }
  {
    //Task 13: Generics with Functions and Interfaces
    const createGenericeArray =<T> (X : T[]) : T[] =>{
      const uniqeArray = []
      return X.filter((value , index)=>(X.indexOf(value) === index) )
      // return [...new Set(X)]
    }
    // console.log(createGenericeArray([1,2,3,4,5,6,7,3,4,5,6,7,8,9,10]));
  }
  {
    //Task 14: Asynchronous TypeScript and Type Aliases
    const func = async  () : Promise<string>=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = await res.json()
      return data 
    }
    func().then(res =>{
      console.log('respone is',res);
    })
  }
//   j
//     // টাইপ অ্যালিয়াস তৈরি করা
// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// // অ্যাসিনক্রোনাস ফাংশন
// const func = async (): Promise<Post> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//   // রেসপন্স চেক করা
//   if (!res.ok) {
//       throw new Error('Network response was not ok');
//   }

//   const data: Post = await res.json(); // JSON ডেটা টাইপ করা
//   return data; // ডেটা রিটার্ন করা
// };

// // ফাংশন কল করা এবং Promise থেকে ডেটা নেওয়া
// func()
//   .then((result) => {
//       // console.log(result); // ডেটা কনসোল লগ করা
//   })
//   .catch((error) => {
//       console.error('There was a problem with the fetch operation:', error); // এরর হ্যান্ডলিং
//   });

//   }
 
  //
}
