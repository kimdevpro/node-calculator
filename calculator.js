const readline = require("readline-sync");

const validOpsObj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
}
const validOps = Object.keys(validOpsObj);

function getValidOperation(operations) {
  return readline.question(`\nWhat operation would you like to perform? (${operations.join(',')}): `,
    {
      limit: operations,
      limitMessage: `\nThat is not a valid operation.` 
    }
  );
}

function getValidNumber(order, isDivision = false, isModulo = false) {
  const number = readline.questionInt(`\nPlease enter the ${order} number: `,
    {
      limitMessage: "\nThis is not a number.",
    }
  );
  if (order == "second" && number == 0 && (isDivision || isModulo)) {
    console.log("\nCannot divide or modulo by zero.");
    return getValidNumber(order, isDivision, isModulo);
  }
  return number;
}

function calculate(a, b, op, list) {
  return list[op](a, b);
}

function interactiveMode(operations) {
  const validOps = Object.keys(operations);
  const operator = getValidOperation(validOps);
  const num1 = getValidNumber("first");
  const isDivision = operator === "/";
  const isModulo = operator === "%";
  const num2 = getValidNumber("second", isDivision, isModulo);
  const result = calculate(num1, num2, operator, operations);
  console.log(`\nThe result is: ${result}`);

}

function argumentMode(args) {
  if (args.length !== 3) {
    console.log("\nPlease provide exactly 3 arguments: number1 operator number2");
    return;
  }

  const [n1, op, n2] = args;
  if (!validOps.includes(op)) {
    console.log(`\nInvalid operator. Use one of: ${validOps.join(',')}`);
    return;
  }

  const a = parseFloat(n1);
  const b = parseFloat(n2);

  if (isNaN(a) || isNaN(b)) {
    console.log("\nBoth inputs must be valid numbers.");
    return;
  }

   if ((op === "/" || op === "%") && b === 0) {
    console.log("\nCannot divide or modulo by zero.");
    return;
  }

  const result = calculate(a, b, op, validOpsObj);
  console.log(`\nThe result is: ${result}`);
}

// Entry point
const args = process.argv.slice(2);
if (args.length === 3) {
  argumentMode(args);
} else {
  interactiveMode(validOpsObj);
}
