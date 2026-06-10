const { add, sub, mul, div, mod, power, squareRoot } = require('../calculator');

describe('Calculator functions', () => {
  describe('Addition', () => {
    test('adds integers (2 + 3 = 5)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negatives and floats', () => {
      expect(add(-1, 1)).toBe(0);
      expect(add(2.5, 0.5)).toBeCloseTo(3.0);
    });
  });

  describe('Subtraction', () => {
    test('subtracts integers (10 - 4 = 6)', () => {
      expect(sub(10, 4)).toBe(6);
    });

    test('subtracts to negative result', () => {
      expect(sub(3, 5)).toBe(-2);
    });
  });

  describe('Multiplication', () => {
    test('multiplies integers (45 * 2 = 90)', () => {
      expect(mul(45, 2)).toBe(90);
    });

    test('multiplies by zero', () => {
      expect(mul(5, 0)).toBe(0);
    });
  });

  describe('Division', () => {
    test('divides integers (20 / 5 = 4)', () => {
      expect(div(20, 5)).toBe(4);
    });

    test('division produces float when necessary', () => {
      expect(div(7, 2)).toBeCloseTo(3.5);
    });

    test('division by zero should throw', () => {
      expect(() => div(5, 0)).toThrow(/Division by zero/);
    });
  });

  describe('Extended operations', () => {
    test('modulo: 5 % 2 = 1', () => {
      expect(mod(5, 2)).toBe(1);
    });

    test('modulo by zero should throw', () => {
      expect(() => mod(5, 0)).toThrow(/Modulo by zero/);
    });

    test('power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power with negative exponent', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });

    test('squareRoot: sqrt(16) = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('squareRoot of negative should throw', () => {
      expect(() => squareRoot(-4)).toThrow(/Square root of negative number/);
    });
  });
});
