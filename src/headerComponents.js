import { auth } from './firebase.js';

export function headerTemplate(user) {
    const avatar = user.photoURL || '../assets/cool-sun.jpg';
    const html = `
  <span>
    <div id="header">
      <img src="../assets/cool-sun.jpg" id="logo">
      <h1>Job Search</h1>
    </div>
    <div id="profile">
      <img src="${avatar}" id="user-image">
      <p>${user.displayName}</p>
      <button>Sign Out</button>
    </div>
  </span>
  `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export default function loadHeader() {
    // const dom = headerTemplate();
    const headerDisplay = document.querySelector('header');


    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = headerTemplate(user);
            const signoutButton = userDom.querySelector('button');
            signoutButton.addEventListener('click', () => {
                auth.signOut();
                window.location.hash = '';
            });
            headerDisplay.appendChild(userDom);

        }
        else {
            window.location = './auth.html';
        }
    });
}

