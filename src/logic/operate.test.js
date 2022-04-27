import operate from './operate';

describe('Testing calculator operations', () => {
  test('Plus operand', () => {

    expect(operate(1, 2, '+')).toBe('3');
  });

  test('Minus operand', () => {

    expect(operate(3, 2, '-')).toBe('1');
  });

  test('Times operand', () => {

    expect(operate(3, 2, 'x')).toBe('6');
  });

  test('Divide operand', () => {

    expect(operate(6, 2, '÷')).toBe('3');
  });

  test('Modulo operand', () => {

    expect(operate(7, 2, '%')).toBe('1');
  });

});