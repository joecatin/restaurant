export async function load(content) {
    const { component } = await import(`./components/${content}/component.js`);
    return component;
}

export async function clear(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    return node;
}