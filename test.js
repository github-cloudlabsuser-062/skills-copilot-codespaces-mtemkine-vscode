// calculator.js
function calculate(firstNumber, secondNumber, operation) {
  let result;

  switch(operation) {
    case 'add':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case 'subtract':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case 'multiply':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case 'divide':
      if (secondNumber != '0') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
      } else {
        throw new Error('Division by zero is not allowed.');
      }
      break;
    default:
      throw new Error('Invalid operation. Only add, subtract, multiply, and divide are supported.');
  }

  return result;
}

module.exports = calculate;

// FILEPATH: /workspaces/skills-copilot-codespaces-mtemkine-vscode/calculate.test.js
const calculate = require('./calculate'); // adjust the path as needed

describe('calculate', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculate(1, 2, 'add')).toBe(3);
  });

  test('adds -1 + 2 to equal 1', () => {
    expect(calculate(-1, 2, 'add')).toBe(1);
  });

  test('adds 0.1 + 0.2 to be close to 0.3', () => {
    expect(calculate(0.1, 0.2, 'add')).toBeCloseTo(0.3);
  });
});