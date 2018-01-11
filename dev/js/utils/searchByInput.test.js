import searchByInput from './searchByInput';

// test('search', () => {
//   expect(searchByInput(28, [{name: 'rahul', age: 28}, {name: 'ravi', age: 27}], 'age'))
//     .toBe([{name: 'rahul', age: 28}]);
// });

describe('isValidStringPositiveCase', () => {
  it('Return true for valid string', () => {
    expect(searchByInput(28, [{name: 'rahul', age: 28}, {name: 'ravi', age: 27}], 'age')).toBe([{name: 'rahul', age: 28}]);
  });
});