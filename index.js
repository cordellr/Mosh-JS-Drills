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




// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);

// console.log(circle1);



// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// //Circle.call({}, 1) same as below

// const circle = new Circle(1);


// Exercise Address Object
// Creates address object with three properties and displays it

// const address = {
//     street: '1111 Streetford St.',
//     city: 'Cityville',
//     zipCode: '54321'
// }

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);




//Exercise Factory Function
//Uses Factory function to display address object

// function factoryAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// console.log(factoryAddress('1111 Streetford St.','Cityville','54321'));




//Exercise Constructor function
//Uses Constructor function to display address object

// function ConstructorAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const newAddress = new ConstructorAddress('1111 Avenue Av.','Townville','12345');

// console.log(newAddress);




// Exercise Object Equality
// Checks to see if two addresses are equal (based on properties and object)

// function ConstructorAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const Address1 = new ConstructorAddress('1111 Avenue Av.','Townville','12345');

// const Address2 = new ConstructorAddress('1111 Avenue Av.','Townville','12345');

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(Address1, Address2)); //should return true because they values of parameters are equal
// console.log(areSame(Address1, Address2)); //should return fale becuase not pointing to same object




//Exercise Blog Post Object

// let blogPost = {
//     title: 'New Blog Post',
//     body: `This is my blog post.
//     I hope you enjoy what I have
//     to write about. Please share
//     your feedback.`,
//     author: 'Cordell',
//     views: 536,
//     comments: [
//         {author: 'Meagan', body: `Thank you for the post!`}
//     ],
//     isLive: true
// }

// console.log(blogPost);




//Exercise to create blog post constructor function

// let newBlogPost = new BlogPost('This Blog','This is my blog','Cordell')

// function BlogPost(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     thisisLive = false;
// }

// console.log(newBlogPost);



//Exercise to create price range objects

// let priceRanges = [
//     { label: '$', tooltip: 'Inexspensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];


//Exercise to create an array within a given range of numbers

const numbers = arrayFromRange(-12,15);

console.log(numbers);

function arrayFromRange(min,max) {
    const rangeArray = [];

    for (i = min; i <=max; i++) {
        rangeArray.push(i);
    }

    return rangeArray;
}
