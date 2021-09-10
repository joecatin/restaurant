import './style.css'

export function item(day = "", lunch = "", diner = "") {

    const item = document.createElement('div');
    item.id = 'day-item-container';

    const itemDay = document.createElement('p');
    itemDay.id = 'item-day';
    itemDay.textContent = day;
    item.appendChild(itemDay);

    const itemHours = document.createElement('p');
    itemHours.id = 'item-hours';
    itemHours.textContent = `${lunch} ~ ${diner}`;
    item.appendChild(itemHours);

    return item;
}