const getProperty = <T extends { name: string }, K extends keyof T>(
  person: T,
  key: K
) => {
  return person[key];
};
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
