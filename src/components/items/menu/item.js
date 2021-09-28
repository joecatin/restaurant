import './style.css'

const item = (icon = "", name = "", description = "", price = 0) => {

    const item = document.createElement('div');
    item.id = 'menu-item-container';

    item.appendChild(icon);

    const body = document.createElement('div');
    body.id = 'item-body';
    const itemName = document.createElement('p');
    itemName.id = 'item-name';
    itemName.textContent = name;
    body.appendChild(itemName);
    const itemDescripion = document.createElement('p');
    itemDescripion.id = 'item-description';
    itemDescripion.textContent = description;
    body.appendChild(itemDescripion);
    item.appendChild(body);
       
    const itemPrice = document.createElement('p');
    itemPrice.id = 'item-price';
    itemPrice.textContent = price;
    item.appendChild(itemPrice);

    return item;
}

export { item };