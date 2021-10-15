import { sum } from './'

test('My sum function', () => {
  const result = sum(40, 2)
  expect(result).toBe(42)
})
