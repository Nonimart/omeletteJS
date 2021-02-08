export default class Personne {

    constructor(nom,lieu,argent, maindroite, mainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = maindroite
        this.mainGauche = mainGauche

        this.seDeplacer = (depart, arrivee) =>{
            arrivee.push(this)
            depart.splice(this)
        }


        this.payerArticle = (article) =>{

        }
        
        this.couper = (ingredient, outil) =>{

        }

    }
}



