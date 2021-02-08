export default class Personne {

    constructor(nom,icon,lieu,argent, maindroite, mainGauche){
        this.nom = nom
        this.icon = icon,
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = maindroite
        this.mainGauche = mainGauche

        this.seDeplacer = (depart, destination) =>{
            destination.visiteurs.push(this)
            depart.visiteurs.splice(depart.visiteurs.indexOf(this),1)
            
            this.lieu = destination.nom
            console.log(`${this.icon} ${this.nom} se déplace de ${depart.icon} ${depart.nom} à ${destination.icon} ${destination.nom}`);            

        }


        this.acheterArticle = (article,place,panier) =>{
            this.mainDroite[0].contenu.push(article)
            console.log(`${this.nom} prend ${article.nom} dans le stock de ${place.icon} ${place.nom} et le met dans son ${panier.icon}${panier.nom}`);  
            this.argent -= article.prix      
        }
        

        this.couper = (ingredient, outil) =>{

        }

    }
}



