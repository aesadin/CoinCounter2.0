// Coin Counter
// Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

// Part 1
// Create a coin counter function that uses recursion to solve the problem.

// Part 2
// Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).

//PseudoCode:
// 1. Construct a variable to hold the DENOMINATIONS of coins
// 2. Divide "n" into the variable units (25, 10, 5, 1).
// 3. Count number of each demonimination (25x3, 10x6, 5x4, etc...)
// 4. Return demoninations with strings ("3 quarters", "6 dimes"...)


//recursion
const numberToChange = (n) => {
  const quarterCounter; //3
  const dimeCounter; //2
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
    return numberToChange(n % .05) + "Quarters:" + Math.floor(n / .05);
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


// const coinChanger 

// triangle-tracker
// |_ __tests__
//     |_ triangle.test.js
// |_ src
//     |_ index.html
//     |_ main.js
//     |_ styles.css
//     |_ triangle.js
// |_ .eslintrc
// |_ .gitignore
// |_ package.json
// |_ README.md
// |_ webpack.config.js




// public static int Ways2PayNCents(int n)
// {
//     int numberOfWays=0;
//     int cent, nickel, dime, quarter;
//     for (quarter = 0; quarter <= n/25; quarter++)         if (n % 25 === 0)
//     {
//         for (dime = 0; dime <= n/10; dime++)              if (n % 10 === 0)
//         {
//             for (nickel = 0; nickel <= n/5; nickel++)
//             {
//                 cent = n - (quarter * 25 + dime * 10 + nickel * 5);
//                 if (cent >= 0)
//                 {
//                     numberOfWays += 1;
//                     Console.WriteLine("{0},{1},{2},{3}", quarter, dime, nickel, cent);
//                 }                   
//             }
//         }
//     }
//     return numberOfWays;            
// }




// import { MovieService } from './movies-service.js';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';


// $(document).ready(function() {

//   $('#movieSelection').click(function() {
//     const movie = $('#movieSearch').val();
//     $('#movieSearch').val("");

//     (async () => {
//       let movieService = new MovieService();
//       const response = await movieService.get(movie);
//       getElements(response);
//     })();

//     function getElements(response) {
//       if (response) {
//         $('.list').append(`"<li>" The official title of ${movie} is ${response.results[0].title}"</li>"`);
//         $('.list').append(`"<li>" Here's what it's about: ${response.results[0].overview} "<li>"`);
//       } else {
//         $('.list').append(`"<li>" No movies for you!"</li>"`);
//         $('.list').append(`"<li>" Please check your inputs and try again! "</li>"`);
//       }
//     }

//   });
// });