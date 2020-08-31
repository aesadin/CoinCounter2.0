export class CoinCounter {
  constructor(number) {
    this.number = number;
  }

  const numberToChange = (n) => {
  
    if (isNaN(n)) { //Pass
      return;
    }
    
    if (n >= .25) { //Pass
      return numberToChange(n % .25) + "Quarters:" + Math.floor(n / .25);
    }
  
    if (n >= .10 && n < .25) { //Pass
      return numberToChange(n % .10) + "Dimes:" + Math.floor(n / .10);
    }
  
    if (n >= .05 && n < .10) { //Pass
      return numberToChange(n % .05) + "Nickels:" + Math.floor(n / .05);
    }
  
    if (n >= .01 && n < .05) { //Pass
      return "Pennies:" + Math.round(n * 100 ) + ",";
    }
  }
  
  
   // Closure
  function coinCount(coin) {
    return function(amount) {
      return Math.floor(amount/coin)
    }
  }
  
  //Variable functions
  const howmanyQuarters = coinCount(.25)
  const howmanyDimes = coinCount(.10)
  const howmanyNickles = coinCount(.05)
  const howmanyPennies = coinCount(.01)

}