export async function load(content) {
    const { component } = await import(`./components/${content}/component.js`);
    return component;
}

export const clear = (node) => {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    return node;
}

export const createDOMObject = (type, id) => {
    const object = document.createElement(type);
    object.id = id;
    return object
}

export const createIcon = (src, id) => {
    const icon = new Image();
    icon.src = src;
    icon.id = id;
    return icon
}

export const addOnClick = (container, object, type, subtype = null) => {
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