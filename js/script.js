// ### Question 1

// Create a function called `receivingFunction` which accepts one argument. Inside this function check if the argument is a function, and if it is, call the function.

// Create another function called `callbackFunction` which logs the string: "I am a callback function".

// Call `receivingFunction` and pass `callbackFunction` into it as an argument.

function receivingFunction(receivingArgument) {
  if (typeof receivingArgument === "function") {
    receivingArgument();
  }
}

function callbackFunction() {
  console.log("i am a callback function");
}

receivingFunction(callbackFunction);

// ### Question 2

// Convert the following `for` loop to a `forEach` loop.

// ```js
// const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }
// ```

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (prize, index) {
  console.log("Prize " + (index + 1) + ": " + prize);
});

//      TEACERS EXAMPLE
// const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// prizes.forEach(function (prize, index) {
//     console.log(`Prize ${index + 1}: ${prize}`);
// });

// ### Question 3

// Write code that waits 5 seconds before logging the string: `I waited 5 seconds before executing`. Store the amount of seconds (5 initially) in a variable so it can be easily changed.

let timer = 5000;

setTimeout(function () {
  console.log("i waited 5 seconds befor executing");
}, timer);

//      TEACHERS EXAMPLE
// const numberOfSeconds = 5;

// function logMessage() {
//     console.log(`I waited ${numberOfSeconds} seconds before executing`);
// }

// setTimeout(logMessage, numberOfSeconds * 1000);

// ### Question 4

// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

let count = 0;

const countingNumbers = setInterval(function () {
  count++;
  if (count === 4) {
    clearInterval(countingNumbers);
  }
  console.log(count);
}, 1500);

//          TEACHERS EXAMPLE
// const interval = 1500;
// let count = 0;
// const limit = 4;

// function logNumber() {
//     // increase count's value by 1
//     count++;

//     // log count's current value
//     console.log(count);

//     // check whether to clear the setInterval
//     if (count === limit) {
//         clearInterval(intervalId);
//     }
// }

// const intervalId = setInterval(logNumber, interval);
