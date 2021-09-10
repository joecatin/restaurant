import sailor from './sailor-colour.png';
import './style.css'

export function component() {

    const sailorIcon = new Image();
    sailorIcon.src = sailor;

    return sailorIcon;
}