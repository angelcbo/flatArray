const transformToPlainArray = require('../src/index');
const expectedResult = [1, 2, 3, 4, 5];
const expectedFailureResult = 'Invalid Array';

test('Transform nested int array [1, [2, [3, [4, 5]]]] to plain array', () => {
  expect(transformToPlainArray([1, [2, [3, [4, 5]]]])).toStrictEqual(expectedResult);
});


test('Transform nested int array [1, 2, [3, [4, 5]]] to plain array', () => {
  expect(transformToPlainArray([1, 2, [3, [4, 5]]])).toStrictEqual(expectedResult);
});

test('Transform nested int array [1, 2, 3, [4, 5]] to plain array', () => {
  expect(transformToPlainArray([1, 2, 3, [4, 5]])).toStrictEqual(expectedResult);
});

test('Transform nested int array [[1, 2], 3, 4, 5] to plain array', () => {
  expect(transformToPlainArray([[1, 2], 3, 4, 5])).toStrictEqual(expectedResult);
});

test('Transform nested int array [[1, 2], 3, [4, 5]] to plain array', () => {
  expect(transformToPlainArray([[1, 2], 3, [4, 5]])).toStrictEqual(expectedResult);
});


test('Transform nested int array [[1, 2], [3, [4, 5]]] to plain array', () => {
  expect(transformToPlainArray([[1, 2], [3, [4, 5]]])).toStrictEqual(expectedResult);
});
