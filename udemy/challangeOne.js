/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK
*/

const markWeight1 = 78; // in kg
const markHeight1 = 1.69; // in meters

const johnWeight1 = 92; // in kg
const johnHeight1 = 1.95; // in meters

const markWeight2 = 95; // in kg
const markHeight2 = 1.88; // in meters

const johnWeight2 = 85; // in kg
const johnHeight2 = 1.76; // in meters

function calculateBMI(weight, height) {
  return weight / (height * height);
}

const markBMI1 = calculateBMI(markWeight1, markHeight1);
const johnBMI1 = calculateBMI(johnWeight1, johnHeight1);
console.log(markBMI1.toFixed(2), johnBMI1.toFixed(2));
const markBMI2 = calculateBMI(markWeight2, markHeight2);
const johnBMI2 = calculateBMI(johnWeight2, johnHeight2);
console.log(markBMI2.toFixed(2), johnBMI2.toFixed(2));
console.log(markBMI1 > johnBMI1);
console.log(markBMI2 > johnBMI2);

function printOutputMessage(firstPersonBMI, secondPersonBMI) {
  let message;
  if (firstPersonBMI > secondPersonBMI) {
    message = `Mark's BMI (${firstPersonBMI.toFixed(
      2
    )}) is higher than John's BMI (${secondPersonBMI.toFixed(2)})`;
  } else {
    message = `John's BMI (${secondPersonBMI.toFixed(
      2
    )}) is higher than Mark's BMI (${firstPersonBMI.toFixed(2)})`;
  }
  return message;
}

console.log(printOutputMessage(markBMI1, johnBMI1));
console.log(printOutputMessage(markBMI2, johnBMI2));
