import { jobListTemplate } from '../src/job-list-template.js'; 
const test = QUnit.test;
QUnit.module('JOB TEMPLATE');

const job = {
    title: 'Technical Lead, GitHub Solutions',
    company: 'Autodesk',
    location: 'Portland, OR or Offsite- USA'
};

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
    const result = jobListTemplate(job);

  //assert
    assert.htmlEqual(result, expected);
});