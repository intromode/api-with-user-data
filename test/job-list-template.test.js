import { jobListTemplate } from '../src/job-list-template.js'; 
import job from '../data/fake.js';
const test = QUnit.test;
QUnit.module('JOB TEMPLATE');

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