{
  //Generice with Fucntion
  const createGenerice = <T>(x: T): T[] => {
    return [x];
  };
  const res1 = createGenerice<string>("bangladesh");
  const res2 = createGenerice<string>("hello world");
  interface person {
    name: string;
    role: string;
  }
  const res3 = createGenerice<person>({
    name: "rooton ",
    role: "developer",
  });

  {
    const createGenericeWithTupol = <T, S>(x: T, Y: S): [T, S] => {
      return [x, Y];
    };
    const res1 = createGenericeWithTupol<string, number>("bangladesh", 2323);
    const res2 = createGenericeWithTupol<number, string>(23243, "hello world");
    interface person {
      name: string;
      role: string;
    }
    type personData = { age: number; student: boolean };
    const res3 = createGenericeWithTupol<person, personData>(
      {
        name: "rooton ",
        role: "developer",
      },
      {
        age: 21,
        student: true,
      }
    );

    const addCourse = <T> (student:T )   =>{
        const course : string = ' next leve web development'
        return (
            {
                ...student, course
            }
        )
    }
    const student1 = addCourse<{name : string , role : string}> ({name: 'roton ', role : 'developer'})
    const student2 = addCourse(['roton', 'mim '])
  }

  //
}
