{
  //Use Key of and with constaint and Extends

  type User = {
    name: string;
    role: string;
    roll: number;
  };
  type User1 = "name" | "role" | "roll"; //manuall
  type User2 = keyof User; // same but dynamic

  const person = {
    name: "rooton ",
    role: "developer",
    roll: 3,
  };
  const accesPerson = person.name;
  const accesPerson2 = person["name"];

  // but when i need dynamic acces then whar i do
  const person1 = <T, K extends keyof T>(student: T, Key: K) => {
    return student[Key];
  };
  const user = {
    name: "rooton ",
    role: "developer",
    roll: 3,
  };
  const user2 = {
    name: "mim",
    role: "manager",
    roll: 2,
    bikes: true,
    habijabi: 122,
  };
  const res = person1(user2, "bikes");

  //
}
