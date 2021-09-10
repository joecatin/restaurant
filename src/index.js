import { load } from './helpers.js';
import './style.css'

document.title = "restaurant";

const main = document.createElement('div');
main.id = 'main-container';
document.body.appendChild(main);

const nav = document.createElement('div');
nav.id = 'nav-container';
main.appendChild(nav);
const content = document.createElement('div');
content.id = 'content-container';
main.appendChild(content);

load("nav").then(component => nav.appendChild(component()));
load("cover").then(component => content.appendChild(component()));
