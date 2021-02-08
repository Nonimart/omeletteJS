export default class Ingredient {
    constructor(nom,prix,etat){
        this.nom = nom
        this.prix = prix 
        this.etat = etat
        
        this.couper = (ingredient, outil) =>{
            this.etat=="tranché"
            console.log(`     🔪 Découpe de ${this.nom}`)
        }

    }
}