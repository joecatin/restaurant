
const load = async content => {
    const { component } = await import(`./components/${content}/component.js`);
    return component;
}

const clear = (node) => {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    return node;
}

const createDOMObject = (type, id) => {
    const object = document.createElement(type);
    object.id = id;
    return object
}

const createIcon = (src, id) => {
    const icon = new Image();
    icon.src = src;
    icon.id = id;
    return icon
}

const addOnClick = (container, object, type, subtype = null) => {
    object.addEventListener("click", () => {
        load(type).then(component => {
            if (subtype) component(subtype).then(component => {
                clear(container).appendChild(component.show());
            }); 
            else clear(container).appendChild(component().show());
        });
    });
    return object;
}

export { load, clear, createDOMObject, createIcon, addOnClick };