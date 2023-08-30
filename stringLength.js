// TEST 1
const inputString = "Microverse";
const length = stringLength(inputString);
console.log(`The length of the string is: ${length}`);

function stringLength(string) {
  if (typeof string !== "string") {
    throw new Error("Input is not a string.");
  }

  const length = string.length;

  if (length === 0) {
    throw new Error("String must have at least 1 character.");
  }

  if (length > 10) {
    throw new Error("String cannot have more than 10 characters.");
  }

  return string.length;
}

//TEST 2

const inputCharacters = "Hello, Enssah!";
const reversedString = reverseString(inputCharacters);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(`'Original String: ${inputCharacters}`);
console.log(`'Rversed String: ${reversedString}`);

//TEST 3
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

// Example usage
const calculator = new Calculator();

const sum = calculator.add(5, 3);
console.log(`Sum: ${sum}`);

const difference = calculator.subtract(10, 4);
console.log(`Difference: ${difference}`);

const product = calculator.multiply(6, 7);
console.log(`Product: ${product}`);


(module.exports = stringLength), reverseString;
module.exports = Calculator;


