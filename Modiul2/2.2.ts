{
  //Interface VS Type
  // type primitive non primitive 2 jaigay use kora jai  but interface only non primitive
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

  //
}
