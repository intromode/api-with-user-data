import { readFromHash, writeToHash } from '../src/manipulate-hash.js';
const test = QUnit.test;

QUnit.module('search components');

test('read from query', assert => {
    //arrange
    const hash = 'description=senior&location=new+york';
    const expected = {
        location: 'new york',
        description: 'senior'
    };

  //act
    const result = readFromHash(hash);
  //assert
    assert.deepEqual(result, expected);
});

test('write to query', assert => {
    //arrange
    const searchTerms = {
        location:'new york', // .value
        description: 'senior'
    };

    const currentQuery = '';

    const expected = 'description=senior&location=new+york';
    //act
    const result = writeToHash(currentQuery, searchTerms);
    //assert
    assert.equal(result, expected);
});