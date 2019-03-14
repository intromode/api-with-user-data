import loadJobList from './job-list-template.js';
import './search.js';
import { readFromHash } from './manipulate-hash.js';
import makeSearchURL from './makeSearchUrl.js';

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const searchOptions = readFromHash(hash);
    const searchUrl = makeSearchURL(searchOptions);
    fetch(searchUrl)
        .then(response => response.json())
        .then(jobList => {
            if(jobList.length === 0){
                alert('NO SEARCH RESULTS FOUND');
            }
            loadJobList(jobList);
        });


});


