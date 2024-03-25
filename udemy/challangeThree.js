/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */

const averageDolphinScroeOne = (96 + 108 + 89) / 3;
console.log(averageDolphinScroeOne.toFixed(2));
const averageKoalaScroeOne = (88 + 91 + 110) / 3;
console.log(averageKoalaScroeOne.toFixed(2));

const averageDolphinScroeOneB = (97 + 112 + 101) / 3;
console.log(averageDolphinScroeOneB.toFixed(2));
const averageKoalaScroeOneB = (109 + 95 + 123) / 3;
console.log(averageKoalaScroeOneB.toFixed(2));
const averageDolphinScroeTwoB = (97 + 112 + 101) / 3;
console.log(averageDolphinScroeTwoB.toFixed(2));
const averageKoalaScroeTwoB = (109 + 95 + 106) / 3;
console.log(averageKoalaScroeTwoB.toFixed(2));

function competition(firstTeamAverageScore, secondTeamAverageScore) {
  let message;
  const minimumScore = 100;
  if (
    firstTeamAverageScore > secondTeamAverageScore &&
    firstTeamAverageScore >= minimumScore
  ) {
    message = 'Dolphins win!';
  } else if (
    firstTeamAverageScore < secondTeamAverageScore &&
    secondTeamAverageScore >= minimumScore
  ) {
    message = 'Koala win!';
  } else if (
    firstTeamAverageScore === secondTeamAverageScore &&
    firstTeamAverageScore >= minimumScore &&
    secondTeamAverageScore >= minimumScore
  ) {
    message = 'Draw!, both teams have same score.';
  } else {
    message =
      'No team wins the trophy both teams have low scores than minimum.';
  }

  return message;
}

console.log(competition(averageDolphinScroeOne, averageKoalaScroeOne));
console.log(competition(averageDolphinScroeOneB, averageKoalaScroeOneB));
console.log(competition(averageDolphinScroeTwoB, averageKoalaScroeTwoB));
