/*
function tipCalculator(bill) {
  let tip;
  let totalTip;
  function tipIdentifier(bill) {
    if (bill >= 50 && bill <= 300) {
      tip = 15;
    } else {
      tip = 20;
    }
    return tip;
  }
  tip = tipIdentifier(bill);
  totalTip = (bill * tip) / 100;
  return totalTip;
}
function tipAndBillCalculator(bill, tip) {
  return bill + tip;
}

console.log(tipAndBillCalculator(275, tipCalculator(275)));
*/

const billValues = [275, 40, 430];

const calculateTip = (billValues) =>
    (tip = billValues) >= 50 && billValues <= 300
        ? billValues * 0.15
        : billValues * 0.2);

        /*
        
// Function to generate output string
const generateOutput = (bill, tip) =>
  `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }`;

// Loop through test data and calculate tip for each bill value
billValues.forEach(billValue => {
  const tip = calculateTip(billValue);
  console.log(generateOutput(billValue, tip));
  */