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
    jobList.forEach(job => {
        const dom = jobListTemplate(job);
        jobListDisplay.appendChild(dom);
    });
}