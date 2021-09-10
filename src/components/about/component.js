import { item } from '../items/day/item.js';
import { items } from './hours.js';
import './style.css'

export function component() {

    const about = document.createElement('div');
    about.id = 'about-container';
    
    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';

    items.forEach(element => {
        const entry = item(element.day, element.lunch, element.diner)
        hoursContainer.appendChild(entry);
    });
    about.appendChild(hoursContainer);

    const address = document.createElement('p');
    address.id = 'address-container';
    address.innerHTML = '20 rue du port <br> 29200 Brest Même <br> France';
    about.appendChild(address);

    return about;
}