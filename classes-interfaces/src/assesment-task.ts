// Exercise #1:
//
// Fix type errors in logAvenger function.
//
// logAvenger function should accept both Human and Inhuman
// and should output relevant information according to
// the input: occupation for Human and superpower for Inhuman.
//
//                                                      Exercise #2:
//
// Without duplicating type structures, create a
// filterInhumans function definition so that we can
// pass only those criteria which are needed,
//   and not the whole Inhuman information as it is
// required now according to typing.
//   Example: Filter Inhuman Avengers with Thunder superpower
//
// */

interface Human {
  type: "human";
  name: string;
  age: number;
  occupation: string;
}

interface Inhuman {
  type: "inhuman";
  name: string;
  age: number;
  superpower: string;
}

export type Person = Human | Inhuman;
export const isInhuman = (person: Person): person is Inhuman =>
  person.type === "inhuman";
export const isHuman = (person: Person): person is Human =>
  person.type === "human";
export const avengers: Person[] = [
  {
    type: "human",
    name: "Tony Stark",
    age: 45,
    occupation: "Genius inventor",
  },
  {
    type: "inhuman",
    name: "Thor",
    age: 38,
    superpower: "Thunder",
  },
  {
    type: "human",
    name: "Steve Rogers",
    age: 85,
    occupation: "Soldier",
  },
  {
    type: "inhuman",
    name: "Icarus",
    age: 40,
    superpower: "Laser Beam",
  },
];

export function logAvenger(avenger: Person) {
  let additionalInformation: string;
  if (isInhuman(avenger)) {
    additionalInformation = avenger.superpower;
  } else {
    additionalInformation = avenger.occupation;
  }
  console.log(` - ${avenger.name}, ${avenger.age}, ${additionalInformation}`);
}

logAvenger(avengers[1]);

export function filterInhuman(
  persons: Person[],
  criteria: Partial<Inhuman>
): Inhuman[] {
  return persons
    .filter(isInhuman)
    .filter(person => JSON.stringify(person) === JSON.stringify({...person, ...criteria}));
  
}

console.log("Inhuman with Thunder Superpower");


filterInhuman(avengers, {
  superpower: "Thunder",
}).forEach(logAvenger);
