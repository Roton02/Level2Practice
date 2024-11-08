{
  const validateKeys = <T extends {}, P>(obj: T, P: string[]): boolean => {
    const isAxistKey = P.every((val) => Object.keys(obj).includes(val));
    if (isAxistKey) {
      return true;
    } else return false;
  };

  // const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // validateKeys(person, ["name", "age"]);
  // console.log(validateKeys(person, ["name", "age"]));
}
