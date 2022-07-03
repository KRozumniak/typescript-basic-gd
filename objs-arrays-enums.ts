// const person: {
//   name: string,
//   age: number
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Kyrylo",
//   age: 27,
//   hobbies: ["Sports", "Coding"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5, 
  READ_ONLY,
  AUTHOR
};

const person = {
  name: "Kyrylo",
  age: 27,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

// person.role.push("admin");
// person.role[1] = 10; // ERROR
// person.role = [2, 'author', 'user']; // ERROR

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby[0].toUpperCase() + hobby.slice(1));
  // console.log(hobby[0].map()); // !!! ERROR
}
