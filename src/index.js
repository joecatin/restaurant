import { load } from './helpers.js';
import './style.css'

const main = document.createElement('div');
main.id = 'main-container';
document.body.appendChild(main);

const nav = document.createElement('div');
nav.id = 'nav-container';
main.appendChild(nav);
const content = document.createElement('div');
content.id = 'content-container';
main.appendChild(content);

load("nav").then((component) => {
    const nav = document.getElementById('nav-container');
    nav.appendChild(component());
});
load("cover").then((component) => {
    const content = document.getElementById('content-container');
    content.appendChild(component());
});





// async function getNav() {
//     const { nav } = await import('./components/nav/component.js');
//     return nav();
// }

// getNav().then((component) => {
//     const main = document.getElementById('main-container');
//     main.appendChild(component);
// });

// async function getContent(content) {
//     // const { menu } = await import('./components/menu/menu.js');
//     // return menu("drinks");
//     const { about } = await import('./components/about/component.js');
//     return about();
// }

// getContent().then((component) => {
//     const main = document.getElementById('main-container');
//     main.appendChild(component);
// });
