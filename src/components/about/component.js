import { clear } from '../../helpers.js'
import { item } from '../items/day/item.js';
import { items as days } from './hours.js';
import './style.css'

const about = document.createElement('div');
const hoursContainer = document.createElement('div');
const address = document.createElement('p');

const displayDays = (days) => {
    days.forEach(element => {
        const entry = item(element.day, element.lunch, element.diner)
        hoursContainer.appendChild(entry);
    });
    return hoursContainer;
}

export function component() {

    about.id = 'about-container';
    hoursContainer.id = 'hours-container';
    about.appendChild(hoursContainer);

    address.id = 'address-container';
    address.innerHTML = '20 rue du port <br> 29200 Brest Même <br> France';
    about.appendChild(address);


    const addDay = (day, lunch, diner) => {
        clear(hoursContainer);
        days.push({ "day": day, "lunch": lunch, "diner": diner })
        displayDays(days);
        return about;
    };
    const updateDay = (day, lunch, diner) => {
        clear(hoursContainer);
        const index = days.findIndex(object => object.day == day);
        days[index] = { "day": day, "lunch": lunch, "diner": diner };
        displayDays(days);
        return about;
    };
    const deleteDay = (day) => {
        clear(hoursContainer);
        displayDays(days.filter(object => object.day != day));
        return about;
    };
    const show = () => { 
        clear(hoursContainer);
        displayDays(days);
        return about;
    }
    
    return { show, addDay, updateDay, deleteDay };
}