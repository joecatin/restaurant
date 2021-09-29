import { clear } from '../../helpers.js'
import { item } from '../items/menu/item.js';
import './style.css'


let menu = document.createElement('div');

const displayItems = (items) => { 
    items.forEach(element => {
        const entry = item(element.icon, element.name, element.description, element.price);
        menu.appendChild(entry);
    });
    return menu;
 }

const component = async (type = "") => {

    menu.id = 'menu-container';
    
    const { items } = await import(`./${type}.js`);

    const addItem = ({ icon, name, description, price }) => {
        clear(menu);
        items.push({ icon, name, description, price });
        return displayItems(items);
    }
    const updateItem = ({ icon, name, description, price }) => {
        clear(menu);
        const index = items.findIndex(item => item.name == name);
        items[index] = { icon, name, description, price };
        return displayItems(items);
    };
    const deleteItem = (name) => {
        clear(menu);
        return displayItems(items.filter(item => item.name != name));
    };
    const show = () => { clear(menu); return displayItems(items) };
    
    return { show, addItem, updateItem, deleteItem };
}

export { component };