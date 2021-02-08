import {
    antoine, 
    maison, epicerie, 
    paprika, oeuf, curry, fromage , ciboulette,couteau, poele,
} from './variables.js'


let mainStory = () => {

    //Initialisation : Antoine est à la Maison
    maison.visiteurs.push(antoine)
    antoine.lieu = "maison"

    console.log(` ${antoine.nom} est actuellement à la ${maison.icon} ${maison.nom}`);

    //Antoine se déplace à l'épicerie
    antoine.seDeplacer('maison','epicerie') 





}

export {mainStory}





