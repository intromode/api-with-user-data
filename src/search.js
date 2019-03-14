import { writeToHash } from './manipulate-hash.js';
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const currentHash = window.location.hash.slice(1);

    const location = document.getElementById('location-input');
    const description = document.getElementById('description-input');
    const searchTerms = {
        location: location.value,
        description: description.value
    };

    const newHash = writeToHash(currentHash, searchTerms);
    window.location.hash = newHash;
});