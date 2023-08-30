const exp = require("constants");
const { execPath } = require("process");
const stringLength = require("./stringLength");
const Calculator = require("./stringLength");
const { describe } = require("node:test");

// TASK 1

describe("check string length", () => {
  test("string lenght should be ten", () => {
    //Arrange
    const inputString = "Microverse";
    const length = stringLength(inputString);
    //Act
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
    //Assert
    expect(stringLength("Microverse")).toBe(10);
  });
});

// TASK 2

test("Rverse the original string", () => {
  const inputCharacters = "Hello, Enssah!";
  const reversedString = reverseString(inputCharacters);
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  expect(reverseString(reversedString)).toMatch("");
});

// TASK 3

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add method", () => {
    test("should add two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("should add a positive and a negative number correctly", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test("should add two negative numbers correctly", () => {
      expect(calculator.add(-8, -5)).toBe(-13);
    });
  });

  describe("subtract method", () => {
    test("should subtract a smaller number from a larger number correctly", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("should subtract a negative number from a positive number correctly", () => {
      expect(calculator.subtract(7, -3)).toBe(10);
    });

    test("should subtract a larger number from a smaller number correctly", () => {
      expect(calculator.subtract(5, 8)).toBe(-3);
    });
  });

  describe("divide method", () => {
    test("should divide a number by a non-zero divisor correctly", () => {
      expect(calculator.divide(15, 3)).toBe(5);
    });

    test("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero.");
    });

    test("should divide a negative number by a positive divisor correctly", () => {
      expect(calculator.divide(-20, 5)).toBe(-4);
    });
  });

  describe("multiply method", () => {
    test("should multiply two positive numbers correctly", () => {
      expect(calculator.multiply(4, 7)).toBe(28);
    });

    test("should multiply a positive number by zero correctly", () => {
      expect(calculator.multiply(6, 0)).toBe(0);
    });

    test("should multiply a negative number by a negative number correctly", () => {
      expect(calculator.multiply(-3, -9)).toBe(27);
    });
  });
});

//TASK 4

