export default function makeSearchUrl(searchOptions) {
    const apiUrl = 'https://jobs.github.com/positions.json?';
    const searchUrl = new URL(apiUrl);
    searchUrl.searchParams.set('location', searchOptions.location);
    searchUrl.searchParams.set('description', searchOptions.description);
    return searchUrl.toString();
}