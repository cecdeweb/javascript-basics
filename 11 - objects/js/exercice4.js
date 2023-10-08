/**### Exercice 4 : Ajout de Méthodes
Dans cet exercice, vous allez ajouter des méthodes à un objet.
3. Ajoutez une méthode `presentation` à l'objet `personne` qui affiche une introduction.
 */
personne.presentation = function(){
    console.log("Dans ma méthode présentation, la personne se nomme " 
    + this.prenom + " " + this.nom + " et a " + this.age + " ans.");
}

personne.presentation()