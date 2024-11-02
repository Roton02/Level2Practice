{
  //Interface VS Type

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

  //
}
