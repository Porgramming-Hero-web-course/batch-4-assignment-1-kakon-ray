{
  interface ObjectType {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (obj: ObjectType, update: { age: number }) => {
    return { ...obj, ...update }
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

}