import sailor from './sailor-colour.png';
import './style.css'

export function component() {

    const icon = new Image();
    icon.src = sailor;

    const show = () => { return icon }
    const update = (src) => {
        const icon = new Image();
        icon.src = src;
        return icon
    }

    return { show, update };
}