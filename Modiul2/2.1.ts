{
//Type assertion 

let name : any ;
name = 'assertion'
let newName = (name as string)   // this is assertion 

//lets  try another exapmle 

const asser  = (value : number |string  ) : number | string  | undefined =>{
    if (typeof value === 'string'){
        console.log(`the value is ${value}`);
        return value 
    }
    else if (typeof value === 'number'){   
        console.log(value*10);
        return value * 10 
    }
}
const result1 = (asser('ami Roton') as string)  //Assertion  
const result2 = (asser(2) as number)











//
}