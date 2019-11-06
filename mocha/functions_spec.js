/* eslint-env node, mocha */

const f = require('./functions.js');
const chai = require('chai');
const assert = chai.assert;


describe('sumArrayElements', () => {
  it('returns the sum of all elements', () => {
    assert.deepEqual(f.sumArrayElements([1, 2, 3]), 6);
  });
});

describe('sqrtAllArrayElements', () => {
  it('returns an array with the square root of all elements', () => {
    assert.deepEqual(f.sqrtAllArrayElements([1, 9, 25, 144]), [1, 3, 5, 12]);
  });
});

describe('filterEvenElements', () => {
  it('returns a new array with only the even elements', () => {
    assert.deepEqual(f.filterEvenElements([1, 2, 3, 4, -5, -6]), [2, 4, -6]);
  });
});

describe('stringIsPalindrome', () => {
  it('Returns true if string is palindrome', () => {
    assert.isTrue(f.stringIsPalindrome('naturrutan'));
  });

  it('Returns false if string is not palindrome', () => {
    assert.isFalse(f.stringIsPalindrome('cygni'));
  });
});

describe('stringContainsOnlyLetters', () => {
  it('Returns true if string contains only letters', () => {
    assert.isTrue(f.stringContainsOnlyLetters('Cygni'));
  });

  it('Returns false if string not contains only letters', () => {
    assert.isFalse(f.stringContainsOnlyLetters('abc123'));
  });
});

describe('add', () => {
  it('Returns the sum of 4 & 9 when calling add(4)(9)', () => {
    assert.isTrue(f.add(4)(9) === 13);
  });
});

describe('getIndexArr', () => {
  it('returns an array of functions which each return its index in the array', () => {
    const n = 50;
    const arr = f.getIndexArr(n);
    assert.isTrue(arr[0]() === 0);
    assert.isTrue(arr[1]() === 1);
    assert.isTrue(arr[n - 1]() === n - 1);
  });
});
