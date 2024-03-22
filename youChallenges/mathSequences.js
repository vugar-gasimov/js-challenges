function mathSequences(params) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < params.length; i++) {
    let number1 = params[i] - params[i - 1];
    arith.add(number1);
    let number2 = params[i] / params[i - 1];
    geo.add(number2);
  }

  if (arith.size === 1) {
    return 'Arithmetic';
  }
  if (geo.size === 1) {
    return 'Geometric';
  }
  return 'No values' - 1;
}
// Arithmetic
console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([40, 80, 120, 160]));
// Geometric
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([9, 81, 729]));
// No sequence -1
console.log(mathSequences([2, 5, 14, 89]));
