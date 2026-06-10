#!/usr/bin/env node

// Node.js CLI calculator
// Supported operations:
// - addition (add)
// - subtraction (sub)
// - multiplication (mul)
// - division (div)

// Usage examples:
//   node src/calculator.js add 2 3    # prints 5
//   node src/calculator.js sub 5 2    # prints 3
//   node src/calculator.js mul 4 3    # prints 12
//   node src/calculator.js div 8 2    # prints 4

function parseNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return n;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function printUsage() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2>');
}

if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;
  if (!op || aRaw === undefined || bRaw === undefined) {
    printUsage();
    process.exit(1);
  }

  let a, b;
  try {
    a = parseNumber(aRaw);
    b = parseNumber(bRaw);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  try {
    let result;
    switch (op) {
      case 'add':
        result = add(a, b);
        break;
      case 'sub':
        result = sub(a, b);
        break;
      case 'mul':
        result = mul(a, b);
        break;
      case 'div':
        result = div(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printUsage();
        process.exit(1);
    }

    // Print numeric result to stdout
    // If result is an integer-like number, print without extra decimals
    if (Number.isInteger(result)) {
      console.log(result);
    } else {
      console.log(result);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Export functions for reuse/testing
module.exports = { add, sub, mul, div };
