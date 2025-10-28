const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ehm', () => {
    expect(values.firstName).toEqual('Ehm');
  });
  test('lastName is Aesch', () => {
    expect(values.lastName).toEqual('Aesch');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1994', () => {
    expect(values.birthYear).toEqual(1994);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ehm Aesch and I am 31 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Ehm Aesch', () => {
    expect(values.fullName).toEqual('Ehm Aesch');
  });
  test('age is 31', () => {
    expect(values.age).toEqual(31);
  });
});
