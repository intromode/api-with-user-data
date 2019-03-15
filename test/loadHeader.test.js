const test = QUnit.test;

QUnit.module('header template');
const user = {
    image: '../assets/cool-sun.jpg',
    name: 'Phoebe LaBlonde'
};

function headerTemplate(user) {
    const html = `
    <span>
      <img src="../assets/cool-sun.jpg" id="logo">
      <h1>Job Search</h1>
      <img src="${user.image}" id="user-image">
      <p>${user.name}</p>
    </span>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('populate header', assert => {
  //arrange
    const expected = `
    <span>
      <img src="../assets/cool-sun.jpg" id="logo">
      <h1>Job Search</h1>
      <img src="../assets/cool-sun.jpg" id="user-image">
      <p>Phoebe LaBlonde</p>
    </span>
    `;
  //act
    const result = headerTemplate(user);

  //assert
    assert.htmlEqual(result, expected);
});