/**### Exercice 4 : Gestion des Commandes
Dans cet exercice, vous allez simuler la gestion de commandes en utilisant la structure 
`switch`.
3. Créez une variable `commande` et attribuez-lui une valeur représentant une commande 
(par exemple, "ajouter", "supprimer", "modifier").
4. Utilisez la structure `switch` pour exécuter le code correspondant à la commande et 
afficher un message approprié dans la console.
 */
function showCde(){
    const cde = ["1 - add", "2 - delete", "3 - update"];
    cde.forEach(element => {
        console.log(element);
    });
}
function gestCde() {
    let choiceCde = prompt("Veuillez sélectionner le numéro de la commande");
    switch(choiceCde){
        case "1":
            console.log("Vous souhaitez ajouter une commande.");
            break;
        case "2":
            console.log("Vous souhaitez supprimer une commande.");
            break;
        case "3":
            console.log("Vous souhaitez mettre à jour une commande.");
            break;
        default:
            console.log("Choisir une commande valide : 1, 2 ou 3");
            break;
    }
}
showCde();
gestCde();