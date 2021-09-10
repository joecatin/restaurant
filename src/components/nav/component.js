import { load, clear } from '../../helpers.js';
import food from './img/plate-colour.png';
import drinks from './img/wine-colour.png';
import about from './img/lighthouse-colour.png';

import './style.css'

export function component() {

    const nav = document.createElement('div');
    nav.id = 'component-container';

    const content = document.getElementById('content-container')
      
    const title = document.createElement('p');
    title.id = 'title';
    title.textContent = "The fisherman shack"
    title.addEventListener("click", () => {
        load("cover").then(component => {
            clear(content).then(content => content.appendChild(component()))
        });
    });
    nav.appendChild(title);

    const icons = document.createElement('div');
    icons.id = 'icon-container';

    const foodIcon = new Image();
    foodIcon.src = food;
    foodIcon.id = 'menu-food';
    foodIcon.addEventListener("click", () => {
        load("menu").then(component => {
            component("food").then(component => {
                clear(content).then(content => content.appendChild(component))
            });
        })
    });
    icons.appendChild(foodIcon);

    const drinksIcon = new Image();
    drinksIcon.src = drinks;
    drinksIcon.id = 'menu-drinks';
    drinksIcon.addEventListener("click", () => {
        load("menu").then(component => {
            component("drinks").then(component => {
                clear(content).then(content => content.appendChild(component))
            });
        })
    });
    icons.appendChild(drinksIcon);

    const aboutIcon = new Image();
    aboutIcon.src = about;
    aboutIcon.id = 'about';
    aboutIcon.addEventListener("click", () => {
        load("about").then(component => {
            clear(content).then(content => content.appendChild(component()))
        });
    });
    icons.appendChild(aboutIcon);
 

    nav.appendChild(icons);


    return nav;
}