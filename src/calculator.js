#!/usr/bin/env node

// Node.js CLI calculator
// Supported operations:
// - addition (add)
// - subtraction (sub)
// - multiplication (mul)
// - division (div)
// - modulo (mod)
// - exponentiation / power (pow)
// - square root (sqrt)

// Usage examples:
//   node src/calculator.js add 2 3    # prints 5
//   node src/calculator.js sub 5 2    # prints 3
//   node src/calculator.js mul 4 3    # prints 12
//   node src/calculator.js div 8 2    # prints 4
//   node src/calculator.js mod 10 3   # prints 1
//   node src/calculator.js pow 2 8    # prints 256
//   node src/calculator.js sqrt 9     # prints 3

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

// Returns the remainder of a divided by b. Throws on modulo by zero.
function mod(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Returns base raised to exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Returns the square root of n. Throws for negative input.
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

function printUsage() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div|mod|pow|sqrt> <num1> <num2?>');
}

if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  if (!op) {
    printUsage();
    process.exit(1);
  }

  let a, b;
  try {
    if (op === 'sqrt') {
      if (aRaw === undefined) {
        printUsage();
        process.exit(1);
      }
      a = parseNumber(aRaw);
    } else {
      if (aRaw === undefined || bRaw === undefined) {
        printUsage();
        process.exit(1);
      }
      a = parseNumber(aRaw);
      b = parseNumber(bRaw);
    }
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
      case 'mod':
        result = mod(a, b);
        break;
      case 'pow':
        result = power(a, b);
        break;
      case 'sqrt':
        result = squareRoot(a);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printUsage();
        process.exit(1);
    }

    // Print numeric result to stdout
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
module.exports = { add, sub, mul, div, mod, power, squareRoot };
