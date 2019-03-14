import { auth, userFavs } from './firebase.js';

export function jobListTemplate(job){ 
    const html = `
    <li>
        <p>Title: ${job.title}</p>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
    </li>
`;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const jobListDisplay = document.getElementById('job-list');
export default function loadJobList(jobList) {
    while(jobListDisplay.children.length > 0) {
        jobListDisplay.lastElementChild.remove();
    }
    jobList.forEach(job => {
        const dom = jobListTemplate(job);
        const li = dom.querySelector('li');
        
        const userID = auth.currentUser.uid;
        const userFavoritesRef = userFavs.child(userID);
        const userFavoriteJobs = userFavoritesRef.child(job.title);
        userFavoriteJobs.once('value')
            .then(allJobTitles => {
                const value = allJobTitles.val();
                if(value){
                    li.classList.add('favorite');
                } else {
                    li.classList.remove('favorite');
                }
            });
        
        li.addEventListener('click', () => {
            if(li.classList.contains('favorite')){
                li.classList.remove('favorite');
                userFavoriteJobs.remove();
            } else {
                li.classList.add('favorite');
                userFavoriteJobs.set({
                    title: job.title,
                    company: job.company,
                    location: job.location
                });
            }
        });
        jobListDisplay.appendChild(dom);
    });
}