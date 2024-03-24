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
