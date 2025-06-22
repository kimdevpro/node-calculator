const readline = require("readline-sync");

function getValidOperation() {
    const validOps = ["+", "-", "*", "/", "%"];
    let op = readline.question("What operation would you like to perform? (+, -, *, /, %): ");
    if (!validOps.includes(op)) {
        console.log("That is not a valid operation.");
        process.exit(1);
    }
    else {
        return op;
    }
}

function getValidNumber(promptText) {
  let input = readline.question(promptText);
  while (isNaN(input)) {
    console.log("This is not a number.");
    input = readline.question(promptText);
  }
  return parseFloat(input);
}

function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    case "%": return b !== 0 ? a % b : "Cannot modulo by zero";
    default: return "Unknown operation";
  }
}

function interactiveMode() {
  const operator = getValidOperation();
  const num1 = getValidNumber("Please enter the first number: ");
  const num2 = getValidNumber("Please enter the second number: ");
  const result = calculate(num1, num2, operator);
  console.log(`The result is: ${result}`);
}

function argumentMode(args) {
  if (args.length !== 3) {
    console.log("Please provide exactly 3 arguments: number1 operator number2");
    return;
  }

  const [n1, op, n2] = args;
  if (!["+", "-", "*", "/", "%"].includes(op)) {
    console.log("Invalid operator. Use one of: +, -, *, /, %");
    return;
  }

  const a = parseFloat(n1);
  const b = parseFloat(n2);

  if (isNaN(a) || isNaN(b)) {
    console.log("Both inputs must be valid numbers.");
    return;
  }

  const result = calculate(a, b, op);
  console.log(`The result is: ${result}`);
}

// Entry point
const args = process.argv.slice(2);
if (args.length === 3) {
  argumentMode(args);
} else {
  interactiveMode();
}
