// const person: {
//   name: string,
//   age: number
// } = {
const person = {
  name: "Kyrylo",
  age: 27,
  hobbies: ['Sports', 'Coding'],
  role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby[0].toUpperCase() + hobby.slice(1));
  // console.log(hobby[0].map()); // !!! ERROR
}