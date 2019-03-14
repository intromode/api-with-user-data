import jobList from '../data/fake.js';
const test = QUnit.test;
QUnit.module('JOB TEMPLATE');

function jobListTemplate(jobList){ 
    
    const html = `
  <li>
    <p>Title: ${jobList.title}</p>
    <p>Company: ${jobList.company}</p>
    <p>Location: ${jobList.location}</p>
  </li>
  `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('dynamically create job list', assert => {
  //arrange
    const expected = `
  <li>
    <p>Title: Technical Lead, GitHub Solutions</p>
    <p>Company: Autodesk</p>
    <p>Location: Portland, OR or Offsite- USA</p>
  </li>
  `;
  //act
    const result = jobListTemplate(jobList);

  //assert
    assert.htmlEqual(result, expected);
});