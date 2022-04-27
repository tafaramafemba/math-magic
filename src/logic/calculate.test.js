import calculate from '../logic/calculate';

describe('Operators', () => {
  test('AC', () => {
  expect(calculate({total: 10, next: 5, operation: '+'}, 'AC')).toMatchObject({"total": null})
  })

  test('=', () => {
    expect(calculate({total: 10, next: 5, operation: '+'}, '=')).toMatchObject({total: '15', next: null, operation: null})
    })

    test('+/-', () => {
      expect(calculate({total: null, next: 5, operation: null}, '+/-')).toMatchObject({next: `${5 *-1}`})
      expect(calculate({total: -5, next: null, operation: null}, '+/-')).toMatchObject({total: `${-5 *-1}`})

    })
})