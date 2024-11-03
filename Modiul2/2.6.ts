{
  //Constaints with generice
  const student1 = <T>(student: T) => {
    const level: string = "next level";
    return {
      ...student,
      level,
    };
  };
  const student2 = student1<{ name: string; role: string }>({
    name: "student",
    role: "student",
  });

  const emni = student1({ emni: "emni" });
  const student3 = student1<{ name: string; role: string; roll: number }>({
    name: "roton",
    role: "student",
    roll: 12,
  });

  //Constind kora mane inforce ba jor kora .  jemon

  {
    const student1 = <T extends {name: string , role: string}>(student: T ) => {
      const level: string = "next level";
      return {
        ...student,
        level,
      };
    };
    const student2 = student1<{ name: string; role: string }>({
      name: "student",
      role: "student",
    });

    const emni = student1({ emni: "emni" });
    const student3 = student1<{ name: string; role: string; roll: number }>({
      name: "roton",
      role: "student",
      roll: 12,
    });
  }

  //
}
