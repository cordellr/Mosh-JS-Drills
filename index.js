//EXERCISE 3 FIZZBUZZ
//If number is divisble by 3 then Fizz, by 5 then Buzz, by both then FizzBuzz, if not then return number.

// const output = fizzBuzz(16);
// console.log(output);

// function fizzBuzz(input) {
//     if (isNaN(input)) {
//         return 'Not a number';
//     } else if (input % 5 === 0 && input % 3 === 0) {
//         return 'FizzBuzz';
//     } else if (input % 5 === 0) {
//         return 'Buzz';
//     } else if (input % 3 === 0) {
//         return 'Fizz';
//     } else {
//     return input;
//     }
// }



//EXERCISE 4 DEMERIT POINTS
//Okay if speed is below 75, 1 point for every 5 over the speed limit, license suspended at 12 points.

// checkSpeed(129);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint)
//         console.log('Ok');

//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points', points);
//     }
// }



//EXERCISE 5 EVEN ODD NUMBERS
//Log if input number is even or odd

// showNumbers(10);

// function showNumbers(limit) {

//     for (i=0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(i, 'EVEN');
//         else console.log (i, 'ODD');
//     }
// }




//EXERCISE 6 COUNT TRUTHY
//Counts items in array that are "truthy"

// let thisArray = [1, 2, 3, null, undefined, 0, NaN, 'word'];

// function countTruthy(array) {
//     itemCount = 0;
//     for (let value of array) {
//         if (value) itemCount++;
//     }
//     console.log(itemCount);
// }

// countTruthy(thisArray);




//EXCERCISE 7 STRING PROPERTIES
//logs object properties if they are strings

// const movie = {
//     title: 'Oh Brother',
//     subtitle: 'Where Art Thou',
//     rating: 4.5,
//     director: 'Cohen Brothers',
//     releaseYear: 2001
// };

// function showProperties(mov) {
//     for (let key in mov)
//         if (typeof mov[key] === 'string')
//             console.log(key, mov[key]);
// }

// showProperties(movie);



//EXERCISE 8 SUM OF MULTIPLES OF 3 AND 5
//logs the sum of all multips of 3 and 5 up to a certain limit

// sum(10);

// function sum(limit) {
//     value = 0

//     for (i = 1; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             value += i;
//         }
//     }

//     console.log(value);
// }



//EXERCISE 9 GRADE
//Averages the scores from array and returns a letter grade

// const scores = [70, 100, 90, 99];

// calculatedGrade(scores);

// function calculatedGrade(scores) {
//     scoreTotal = 0;

//     for (i = 0; i < scores.length; i++) {
//         scoreTotal += scores[i];
//     }

//     averageScore = scoreTotal / scores.length;
//     console.log(averageScore);

//     if (averageScore < 59) console.log('F');
//     else if (averageScore < 69) console.log('D');
//     else if (averageScore < 79) console.log('C');
//     else if (averageScore < 89) console.log('B');
//     else console.log('A');
// }




//EXERCISE 10 STARS
//Logs number of stars that correspond to the row number

// showStars(6);

// function showStars(rows) {
//     for (row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 1; i <= row; i++)
//             pattern += '*';
//         console.log(pattern);
//     }
// }




//EXERCISE 11 PRIME NUMBERS
//Takes numbers up to a certain limit and displays them if they are prime numbers

// showPrimes(100);

// function showPrimes(limit) {
//     for (num = 2; num <= limit; num++) {

//         let isPrime = true;
//         for (factor = 2; factor < num; factor++) {
//             if (num % factor === 0) {
//                 isPrime = false;

//             }
//         }

//         if (isPrime) console.log(num);
//     }
// }