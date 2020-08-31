import { CoinCounter } from './../src/coinCounter.js';

describe('CoinCounter', () => {

  // beforeEach(() => {
  //   testNumber = new Number(4.99);
  // });
  
  test('determines whether n is a number', () => {
    const testCoin = new CoinCounter(4.99);
    expect(testCoin.number).toEqual(4.99);
  });
  
  // test('should number of quarters', () => {

  // })
})