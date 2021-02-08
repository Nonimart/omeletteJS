import {} from './personne.js'


let antoine = new Personne("Antoine", "lieu", 100, [],[])
let maison = new Lieu ("Maison", [])


let couteau = {
    nom : "Couteau"

    couper (ingredient) {
        ingredient.etat = "Coupé"
    }
}

export {}

