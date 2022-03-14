const transformToPlainArray = require('../src/index');
const expectedResult = [1, 2, 3, 4, 5];

test('Parse nested int array [1, [2, [3, [4, 5]]]] to plain array', () => {
  expect(transformToPlainArray([1, [2, [3, [4, 5]]]])).toStrictEqual(expectedResult);
});


test('Parse nested int array [1, 2, [3, [4, 5]]] to plain array', () => {
  expect(transformToPlainArray([1, 2, [3, [4, 5]]])).toStrictEqual(expectedResult);
});

test('Parse nested int array [1, 2, 3, [4, 5]] to plain array', () => {
  expect(transformToPlainArray([1, 2, 3, [4, 5]])).toStrictEqual(expectedResult);
});

test('Parse nested int array [[1, 2], 3, 4, 5] to plain array', () => {
  expect(transformToPlainArray([[1, 2], 3, 4, 5])).toStrictEqual(expectedResult);
});

test('Parse nested int array [[1, 2], 3, [4, 5]] to plain array', () => {
  expect(transformToPlainArray([[1, 2], 3, [4, 5]])).toStrictEqual(expectedResult);
});


test('Parse nested int array [[1, 2], [3, [4, 5]]] to plain array', () => {
  expect(transformToPlainArray([[1, 2], [3, [4, 5]]])).toStrictEqual(expectedResult);
});
