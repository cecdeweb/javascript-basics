/**### Exercice 5 : Gestion d'Inventaire
3. Créez un tableau multidimensionnel représentant un inventaire d'objets. 
Chaque objet a des propriétés telles que le nom, la quantité, et la valeur.
4. Implémentez des fonctionnalités pour ajouter, supprimer et afficher des 
objets dans l'inventaire.
 */
let inventaire = [
    {
        nom: "chaise",
        quantite: 4,
        valeur: 80
    },
    {
        nom: "table",
        quantite: 1,
        valeur: 120
    },
    {
        nom: "luminaire",
        quantite: 3,
        valeur: 45
    },
];
function afficherObj(){
    for (let i=0; i<inventaire.length; i++) {
        console.log("Numéro de l'objet : " + i + " -> " + inventaire[i].nom 
        + " - quantité : " + inventaire[i].quantite + " - prix : " 
        + inventaire[i].valeur + "€");
    }
};
function ajouterObj(){
    let nouvelObjNom = prompt("Nom de l'objet à ajouter ?")
    let nouvelObjQte = prompt("Quantité de l'objet à ajouter ?")
    let nouvelObjVal = prompt("Valeur de l'objet à ajouter ?")
    inventaire.push({
        nom: nouvelObjNom,
        quantite: nouvelObjQte,
        valeur: nouvelObjVal
    })
};
function supObj(){
    afficherObj();
    let numObjSup = prompt("Quel numéro d'objet souhaitez-vous supprimer ?")
    if(confirm("Voulez-vous supprimer définitivement " + inventaire[numObjSup].nom + " ?")){
        inventaire.splice(numObjSup,1);
        console.log("L'objet a été supprimé.");
    }else{
        console.log("L'objet est conservé.");
    }
};
let repMenu = 0;
let affMenu = "1- Afficher les objets \n2- Ajouter un objet \n3- Supprimer un objet \n4- Sortir";
console.log(affMenu);
while(repMenu!=4){
repMenu = prompt("Quel est votre choix : 1,2,3 ou 4 ?");
    switch(repMenu){
        case "1":
            afficherObj();
            console.log(affMenu);;
            break;
        case "2":
            ajouterObj();
            afficherObj();
            console.log(affMenu);;
            break;
        case "3":
            supObj();
            afficherObj();
            console.log(affMenu);;
            break;
        case "4":
            break;
        default:
            console.log("Merci de saisir une commande valide");
    };
};