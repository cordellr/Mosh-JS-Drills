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

// const numbers = arrayFromRange(-12,15);

// console.log(numbers);

// function arrayFromRange(min,max) {
//     const rangeArray = [];

//     for (i = min; i <=max; i++) {
//         rangeArray.push(i);
//     }

//     return rangeArray;
// }



//Excercise: write a function to determine if element exists in array without using the "includes" method

// const numbers = [1,2,3,4];

// //console.log(numbers.includes(1));
// console.log(includes(numbers,2));

// function includes(array, searchElement) {
//     return array.indexOf(searchElement) !== -1;
// }




//Exercise: removes values from an array based on equivalent values from another array

// const numbers = [1,2,3,4,5,6,1];

// console.log(except(numbers,[4,1]));

// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;
// }




//Exercise: Takes element of specified index and moves it according to specified offset

// const numbers = [1,2,3,4];

// moveBy(numbers, 1, 2); //take the array numbers, the index 1 (which is 2), and moves is two places to the right

// function moveBy(array, index, offset) {
//     if (index + offset >= 0 && index + offset < array.length) {
//     newArray = [...array]; //makes copy of array, to not affect original

//     splicedNum = newArray.splice(index,1);

//     newArray.splice(index + offset, 0, splicedNum[0]);

//     console.log(newArray); // expected output = [1, 3, 4, 2]
//     } else {
//         console.error('not a valid entry');
//     }

// }




//Exercise: Counts the number of occurences for given value in an array.

// const numbers = [1,2,2,4,1,2,1];

// const count = countOccurences(numbers, 2)

// console.log(count);

// function countOccurences (array, searchElement) {
//     let count = 0;
//     for (let number of array) 
//         if (searchElement === number) {
//             count += 1;
//         }
//     return count;
// }



//Exercise: Finds the max number from a given array

// const numbers = [1, 2, 6, 4, 3, 0, 25, 19];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;

//     let max = 0;
//     for (let num of array)
//         if (num > max) {
//             max = num;
//         }
//     return max;
// }



// //Excercise: displays the title of the highest rated 2018 movie in descending order

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// const titles = movies
// .filter(m => m.year === 2018 && m.rating >= 4)
// .sort((a,b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title)

// console.log(titles);




// Exercise: sums any number of arguments passed, including in an array

// let total = sum([1, 2, 3, 4, 5]);

// console.log(total);

// function sum(...args) {
//     if(args.length === 1 && Array.isArray(args[0]))
//         args = [...args[0]]; //if an array is passed, runs spread operator so numbers can be evaluated as normal

//     return args.reduce((a, b) => a + b);
// }




//Exercise: create circle object with read-only property

// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);




//Excercise: Takes countOccurences that I made earlier, and implements try/catch and throw to display error message
//when the argument passed to countOccurences is not an array

try {
const numbers = [1,2,2,4,1,2,1];

const count = countOccurences(null, 2) // 'null' is not an array

console.log(count);
}
catch(e) {
    console.log(e.message); //take throw error message and displays on the console
}

function countOccurences (array, searchElement) {
    if (!Array.isArray(array)) //checks to see if argument passed is not an array
        throw new Error('Not an array.') //if not an array, throws error message

    let count = 0;
    for (let number of array) 
        if (searchElement === number) {
            count += 1;
        }
    return count;
}
