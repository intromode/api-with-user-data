import { headerTemplate } from '../src/headerComponents.js';
const test = QUnit.test;

QUnit.module('header template');
const user = {
    photoURL: '../assets/cool-sun.jpg',
    displayName: 'Phoebe LaBlonde'
};

test('populate header', assert => {
  //arrange
    const expected = `
    <span>
      <div id="header">
        <img src="../assets/cool-sun.jpg" id="logo">
        <h1>Job Search</h1>
      </div>
      <div id="profile">
        <img src="../assets/cool-sun.jpg" id="user-image">
        <p>Phoebe LaBlonde</p>
        <button>Sign Out</button>
      </div>
    </span>
    `;
  //act
    const result = headerTemplate(user);

  //assert
    assert.htmlEqual(result, expected);
});