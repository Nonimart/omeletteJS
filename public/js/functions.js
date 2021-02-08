import {
    antoine, 
    maison, epicerie, 
    bol, couteau, poele,  

} from './variables.js'

// UNE PREMIERE FACON D'ACHETER LES INGREDIENTS EN UTILISANT UNE FONCTION EXTERIEURE, ABANDONNEE EN COURS DE ROUTE MAIS FONCTIONNELLE

// let prendreIngredients = (user,place) =>{
//     place.stock.forEach(element => {
//         user.mainDroite[0].contenu.push(element)
//         console.log(`${user.nom} prend ${element.nom} dans le stock de ${place.icon} ${place.nom} et le met dans son  ${user.mainDroite[0].icon} ${user.mainDroite[0].nom}`);
//     });
// }




let mainStory = () => {
setTimeout(function(){ 
    //Initialisation : Antoine est à la Maison
    maison.visiteurs.push(antoine)
    antoine.lieu = "maison"

            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(`${antoine.icon} ${antoine.nom} est actuellement à la ${maison.icon} ${maison.nom}`);

    // }, 100)
}, 1000);

setTimeout(function(){ 
    //Antoine se déplace à l'épicerie
    antoine.seDeplacer(maison,epicerie) 

            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(`     ${maison.icon} ${maison.nom} est désormais vide:`, maison.visiteurs)
            console.log(`     ${epicerie.icon} ${epicerie.nom} reçoit de la visite par contre 😀:`, epicerie.visiteurs)

}, 2000);

setTimeout(function(){ 
    // Mon personnage prends un Panier dans l'épicerie
    antoine.mainDroite.push(epicerie.paniers[0])
    epicerie.paniers.splice(epicerie.paniers[0],1)

            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(` ${antoine.icon} ${antoine.nom} a pris le ${antoine.mainDroite[0].icon} ${antoine.mainDroite[0].nom}`)
            console.log("     Dans la main d'Antoine", antoine.mainDroite);
            // console.log("Paniers Restants dans l'épicerie", epicerie.paniers)
}, 3000);

setTimeout(function(){ 
    // Création d'une boucle qui va prendre chaque élément du contenu de l'épicerie 
    epicerie.stock.forEach(element => {
        antoine.acheterArticle(element,epicerie,antoine.mainDroite[0])
    })

            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(`     Le ${antoine.mainDroite[0].icon} ${antoine.mainDroite[0].nom} de ${antoine.nom} est désormais plein de bonnes choses :\n     `,antoine.mainDroite[0].contenu);
            console.log(`     ${antoine.icon} ${antoine.nom} à en revanche un peu moins d'argent dans sa poche : 💵 `,antoine.argent);
}, 4000);

setTimeout(function(){ 
     //Antoine rentre chez lui
     antoine.seDeplacer(epicerie,maison)

            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(`     ${maison.icon} ${maison.nom} est désormais remplie à nouveau 😀:`, maison.visiteurs)
            console.log(`     ${epicerie.icon} ${epicerie.nom} s'est vidée :`, epicerie.visiteurs)
}, 5000);

setTimeout(function(){ 
    // Mettre chaque élément dans le bol 
    while(antoine.mainDroite[0].contenu.length > 0){
        
        console.log(`${antoine.icon} ${antoine.nom} met ${antoine.mainDroite[0].contenu[0].nom} dans ${bol.icon} ${bol.nom}`);
        bol.contenu.push(antoine.mainDroite[0].contenu[0])
        antoine.mainDroite[0].contenu.shift()
    }
            // ———— LOG ILLUSTRATIF DU RESULTAT 
            console.log(`     Le ${antoine.mainDroite[0].icon} ${antoine.mainDroite[0].nom} d'${antoine.icon} ${antoine.nom} est désormais vide:`,antoine.mainDroite[0].contenu)
            console.log(`     Le ${bol.icon} ${bol.nom} est désormais bien rempli :`, bol.contenu)      
}, 6000);

setTimeout(function(){ 
    //Antoine retourne à l'épicerie pour rendre le panier
    console.log(` 🤦‍♂️  🤦‍♂️  🤦‍♂️  🤦‍♂️ ${antoine.nom} à oublié de rendre son panier  !!`) 
    antoine.seDeplacer(maison,epicerie)
          

    console.log(`${antoine.icon} ${antoine.nom} rend enfin ${antoine.mainDroite[0].icon} ${antoine.mainDroite[0].nom} à ${epicerie.icon} ${epicerie.nom}😅 😅 😅 `) 
    epicerie.paniers.unshift(antoine.mainDroite[0])
    antoine.mainDroite.splice(0,1)

            // ———— LOG ILLUSTRATIF DU RESULTAT
            console.log(`     La main droite de ${antoine.icon} ${antoine.nom} est enfin vide !! :`, antoine.mainDroite) 
            console.log(`     ${epicerie.icon} ${epicerie.nom} à enfin récupéré son panier 😀 :`, epicerie.paniers) 
}, 7000);

setTimeout(function(){ 
    //Antoine rentre enfin chez lui 
    antoine.seDeplacer(epicerie,maison)
    console.log(`${antoine.icon} ${antoine.nom} prépare enfin son omelette`)
}, 8000);

setTimeout(function(){ 
    // Vérifier Chaque ingrédient du bol et le coupe si nécéssaire
    bol.contenu.forEach(element => {
        if(element.etat=="entier"){
            // element.couper()
            couteau.couper(element)
        }
    });
}, 9000);

setTimeout(function(){ 
    // On mélange le tout
    bol.melanger('Omelette')
   
    console.log(`🍜 🍜 On bat le tout bien fort et on commence à obteninr un liquide onctueux 🍜 🍜 :`, bol.contenu) 
}, 10000);  

setTimeout(function(){      
    // On vide le contenu du bol dans la poele
    console.log(`On vide le contenu de ${bol.icon} ${bol.nom} dans ${poele.icon} ${poele.nom}`) 
    poele.contenu.push(bol.contenu)
    bol.contenu.splice()

            // ———— LOG ILLUSTRATIF DU RESULTAT
            console.log(` ${bol.icon} ${bol.nom} est vide :`, bol.contenu)
            console.log(` ${poele.icon} ${poele.nom} est pleine:`, poele.contenu) 
}, 11000);

setTimeout(function(){ 
    console.log(`L'omelette est en train de cuire ! 🍳 🍳 🍳 🍳 🍳`);
    poele.cuire()
}, 12000);  

setTimeout(function(){ 
    console.log(`👨‍🍳 🍽️ 🍳 L'omelette est prête ! `);
}, 16000);

}   









export {mainStory}

