function longestWord(sentence) {
  let words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(
  longestWord('Obwohl ich müde bin, gehe ich trotzdem ins Fitnessstudio. ')
);
console.log(
  longestWord(
    'Wir haben uns gefragt, ob wir am Wochenende einen Ausflug machen sollten. '
  )
);
