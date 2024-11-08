interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = <T extends Profile, P>(obj: T, P: Partial<T>) => {
  return { ...obj, ...P };
};

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// updateProfile(myProfile, { age: 26 });
// console.log(updateProfile(myProfile, {age : 26}));
