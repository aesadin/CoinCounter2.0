import { CoinCounter } from './../src/coinCounter.js';

describe('CoinCounter', () => {

  // beforeEach(() => {
  //   testNumber = new Number(4.99);
  // });
  
  test('determines whether n is a number', () => {
    const testCoin = new CoinCounter(4.99);
    expect(testCoin.number).toEqual(4.99);
  });
  
  test('should determine number of coins', () => {
    const testCoin = new CoinCounter(4.99);
    expect(testCoin.numberToChange).toEqual("Pennies: 4, Nickels: 0, Dimes: 2, Quarters: 19")
  })
});


// if (n >= .25) { //Pass
//   return numberToChange(n % .25) + "Quarters:" + Math.floor(n / .25);
// }

// if (n >= .10 && n < .25) { //Pass
//   return numberToChange(n % .10) + "Dimes:" + Math.floor(n / .10);
// }

// if (n >= .05 && n < .10) { //Pass
//   return numberToChange(n % .05) + "Quarters:" + Math.floor(n / .05);
// }

// if (n >= .01 && n < .05) { //Pass
//   return "Pennies:" + Math.round(n * 100 ) + ",";
// }