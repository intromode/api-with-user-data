export function readFromHash(hash) {
    const searchParams = new URLSearchParams(hash);
    const searchOptions = {
        location: searchParams.get('location'),
        description: searchParams.get('description')
    };
    return searchOptions;
}

export function writeToHash(currentHash, searchTerms) {
    const searchParams = new URLSearchParams(currentHash);
    searchParams.set('description', searchTerms.description);
    searchParams.set('location', searchTerms.location);
    return searchParams.toString();
}