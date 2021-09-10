import { item } from '../items/menu/item.js';
import './style.css'

export async function component(type = "") {

    const menu = document.createElement('div');
    menu.id = 'menu-container';
    
    const { items } = await import(`./${type}.js`);
    items.forEach(element => {
        const entry = item(element.icon, element.name, element.description, element.price)
        menu.appendChild(entry);
    });
    
    return menu;
}

