// Generics

// const names: Array<string> = []; // string []
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {

  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Kirk', hobbies: ['Sports']}, {age: 27});
// console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got not value.';
  if (element.length === 1) {
    descriptionText = `Got 1 element.`
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['sports', 'cooking']));
// console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({name: 'Kirk'}, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Kirk');
textStorage.addItem('Anna');
textStorage.removeItem('Kirk');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const kirkObj = {name: 'Kirk'};

// objStorage.addItem(kirkObj);
// objStorage.addItem({name: 'Anna'});

// objStorage.removeItem(kirkObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Kirk', 'Anna'];
// names.push('Mark');
// names.pop();