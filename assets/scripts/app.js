const country = 'Azerbaijan';
const continent = 'Eurasia';
let populationAzerbaijan = 10;

console.log(country);
console.log(typeof country);
console.log(continent);
console.log(typeof continent);
console.log(populationAzerbaijan);
console.log(typeof populationAzerbaijan);

const isIsland = false;
console.log(isIsland);
console.log(typeof isIsland);

const language = 'Azerbaijani';
console.log(language);
console.log(typeof language);

console.log(populationAzerbaijan / 2);
populationAzerbaijan++;
console.log(populationAzerbaijan);
let populationFinland = 6;
console.log(populationAzerbaijan > populationFinland);
const countryFinland = 'Finland';
const differenceResult = populationAzerbaijan - populationFinland;
console.log(populationAzerbaijan < 33);
console.log(
  country +
    ' ' +
    'is a Turkish country located in' +
    ' ' +
    continent +
    ' ' +
    'which have' +
    ' ' +
    populationAzerbaijan +
    ' ' +
    'million population which is more than ' +
    countryFinland +
    "'s" +
    ' ' +
    populationFinland +
    ' ' +
    'million population by' +
    ' ' +
    differenceResult +
    ' ' +
    'million'
);

function createCombine(a, b, c) {
  return (a * b) / c;
}
const firstCombination = createCombine(12, 34, 94);
console.log(firstCombination);

class User {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  createGreet(message) {
    console.log(message);
  }
}

const userOne = new User('Vugar', 'Gasimov', 25);
console.log(userOne);
userOne.createGreet('Hello dear guests');

const hobbies = ['driving', 'swimming', 'reading'];
console.log(hobbies[1]);
hobbies.push('running');

const index = hobbies.findIndex((item) => item === 'running');

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
/*
function transformToObjects(a, b, c) {
  const args = [a, b, c]; // Create an array containing the arguments
  return args.map((item) => ({ val: item })); // Map over the array and transform each item into an object with the key 'val'
}

// Example usage:
const result = transformToObjects(1, 2, 3);
console.log(result);
*/

function transformToObjects(numbers) {
  return numbers.map((item) => ({ val: item }));
}

const result = transformToObjects([1, 2, 3]);
console.log(result);
