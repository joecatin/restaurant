import white from './img/glass-white.png';
const boisson = new Image();
boisson.src = white;
const cazaux = new Image();
cazaux.src = white;
const janasse = new Image();
janasse.src = white;
import red from './img/glass-red.png';
const redIcon = new Image();
redIcon.src = red;

export const items = [
    {
        "icon": boisson,
        "name": 'Domaine Boisson: "l’Exigence"',
        "description": "roussanne, grenache blanc, clairette, bourboulenc",
        "price": "£30"
    },
    {
        "icon": cazaux,
        "name": 'Clos des Cazaux: "Vieilles Vignes"',
        "description": "clairette, roussanne, viognier",
        "price": "£42"
    },
    {
        "icon": janasse,
        "name": 'Domaine de la Janasse: "Tradition"',
        "description": "grenache, clairette, roussanne",
        "price": "£63"
    },
    {
        "icon": redIcon,
        "name": 'Domaine Delubac: "Les Bruneau"',
        "description": "grenache, syrah, mourvèdre",
        "price": "£26"
    }
]

