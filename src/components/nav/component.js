import { createDOMObject, createIcon, addOnClick } from '../../helpers.js'
import food from './img/plate-colour.png';
import drinks from './img/wine-colour.png';
import about from './img/lighthouse-colour.png';
import './style.css'

const component = () => {

    const nav = createDOMObject('div', 'component-container');
    const content = document.getElementById('content-container');
      
    const title = createDOMObject('p', 'title');
    title.textContent = "The fisherman shack"
    nav.appendChild(addOnClick(content, title, 'cover'));
    

    const icons = createDOMObject('div', 'icon-container');

    const foodIcon = createIcon(food, 'menu-food');
    icons.appendChild(addOnClick(content, foodIcon, 'menu', 'food'));

    const drinksIcon = createIcon(drinks, 'menu-drinks');
    icons.appendChild(addOnClick(content, drinksIcon, 'menu', 'drinks'));


    const aboutIcon = createIcon(about, 'about');
    icons.appendChild(addOnClick(content, aboutIcon, 'about'));
 

    nav.appendChild(icons);


    const show = () => { return nav };
    
    return { show };
}

export { component };