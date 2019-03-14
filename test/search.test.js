const test = QUnit.test;

QUnit.module('search components');

function readFromQuery(hash) {
    const searchParams = new URLSearchParams(hash);
    const searchOptions = {
        location: searchParams.get('location'),
        description: searchParams.get('description')
    };
    return searchOptions;
}

test('read from query', assert => {
    //arrange
    const hash = 'description=senior&location=new+york';
    const expected = {
        location: 'new york',
        description: 'senior'
    };

  //act
    const result = readFromQuery(hash);
  //assert
    assert.deepEqual(result, expected);
});

function writeToQuery(currentQuery, searchTerms) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('description', searchTerms.description);
    searchParams.set('location', searchTerms.location);
    return searchParams.toString();
}

test('write to query', assert => {
    //arrange
    const searchTerms = {
        location:'new york', // .value
        description: 'senior'
    };

    const currentQuery = '';

    const expected = 'description=senior&location=new+york';
    //act
    const result = writeToQuery(currentQuery, searchTerms);
    //assert
    assert.equal(result, expected);
});