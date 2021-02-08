import Personne from './class_personne.js';
import Lieu from './class_lieu.js';
import Ingredient from './class_ingredient.js';


let antoine = new Personne("Antoine", "", 100, [],[])

// INSTANCES LIEU
let maison = new Lieu ("🏠", "Maison", [],[])
let epicerie = new Lieu ("🛒", "Épicerie", [],[])


// INSTANCES INGREDIENTS
let paprika = new Ingredient("Paprika",10,"moulu")
let oeuf = new Ingredient("Oeuf",10,"entier")
let curry = new Ingredient("Curry",10,"moulu")
let fromage = new Ingredient("Fromage",10,"entier")
let ciboulette = new Ingredient ("Ciboulette",10,"entier")


// OUTILS
let couteau = {
    nom : "Couteau",

    couper (ingredient) {
        ingredient.etat = "Coupé"
    }
}


let poele = {
    nom : "Poele",

    cuire (ingredient) {
        ingredient.cuisson = "Cuit"
    }       
}

export {
    antoine, 
    maison, epicerie, 
    paprika, oeuf, curry, fromage , ciboulette,couteau, poele,
} 

