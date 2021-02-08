import Personne from './class_personne.js';
import Lieu from './class_lieu.js';
import Ingredient from './class_ingredient.js';
import Panier from './class_panier.js';


let antoine = new Personne("Antoine","👨‍🚀", "", 50, [],[])

// INSTANCES PANIERS
let panierBleu = new Panier ('panierBleu', "🔹 🛒")
let panierRouge = new Panier ('panierRouge',"🔻 🛒")
let panierJaune = new Panier ('panierJaune', "🔸 🛒")

// INSTANCES INGREDIENTS
let paprika = new Ingredient("Paprika",5,"moulu")
let oeuf = new Ingredient("Oeuf",7,"entier")
let curry = new Ingredient("Curry",3,"moulu")
let fromage = new Ingredient("Fromage",9.50,"entier")
let ciboulette = new Ingredient ("Ciboulette",3.20,"entier")


// INSTANCES LIEU
let maison = new Lieu ("🏠", "Maison", [],[])
let epicerie = new Lieu ("🏣", "Épicerie", [],[panierBleu,panierRouge,panierJaune],[paprika,oeuf,curry,fromage,ciboulette])

// OUTIL COUTEAU
let bol = {
    nom : "Bol",
    icon: "🍲",
    contenu : [],

    

    melanger (nomduMelange) {
        let newMelange = {
            nomMelange : nomduMelange,
            ingredients : this.contenu.join('+'),
            etat : "cru",
        }
        
    }
}

// > Créer un bol avec un tableau comme contenu
// Ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]


// OUTIL COUTEAU
let couteau = {
    nom : "Couteau",

    couper (ingredient) {
        ingredient.etat = "coupe"
    }
}

// OUTIL POELE
let poele = {
    nom : "Poele",

    cuire (ingredient) {
        ingredient.cuisson = "cuit"
    }       
}







export {
    antoine, 
    maison, epicerie,
    panierBleu, panierRouge, panierJaune, 
    bol, couteau, poele, 
    paprika, oeuf, curry, fromage , ciboulette,
} 

