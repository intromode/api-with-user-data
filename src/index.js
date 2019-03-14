import loadJobList from './job-list-template.js';
import './search.js';
import { readFromHash } from './manipulate-hash.js';
import makeSearchURL from './makeSearchUrl.js';

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const searchOptions = readFromHash(hash);
    const searchUrl = makeSearchURL(searchOptions);
    console.log(searchUrl);

    fetch(searchUrl)
        .then(response => response.json())
        .then(jobList => {
            loadJobList(jobList);
            console.log(jobList);
        });


});


