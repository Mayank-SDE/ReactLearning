let age: number;

age = 12;

let hobbies: string[];
type Person = {
  name: string;
  age: number;
};
let randomObject: Person;

randomObject = {
  name: 'mayank',
  age: 25,
};

let peopleObjectArray: Person[];

function add(a: number, b: number): number {
  return a + b;
}

function printFunction(value: any) {
  console.log('printing ' + value);
}

printFunction('Mayank');

function genericFunction<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4, 5, 6, 7, 8];

const updatedArray = genericFunction(demoArray, 10);

updatedArray[0].split();

console.log(updatedArray);
