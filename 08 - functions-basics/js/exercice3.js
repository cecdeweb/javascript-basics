/**## Exercice 3 : Manipulation des Objets

Dans cet exercice, vous allez manipuler un objet en utilisant des fonctions 
natives pour gérer ses propriétés.
3. Vous avez un objet `utilisateur` contenant des informations.
4. Écrivez une fonction `ajouterPropriete` qui prend l'objet `utilisateur`, 
un nom de propriété et une valeur, et ajoute une nouvelle propriété à l'objet.
5. Écrivez une fonction `supprimerPropriete` qui prend l'objet `utilisateur` 
et le nom d'une propriété, puis supprime cette propriété de l'objet.
 */
let user = new Object();
user.name = "My name";
user.age = 40;
user.height = 165;
console.log(user);
function addProperty(){
    property = prompt("Quelle propriété souhaitez-vous ajouter ?");
    user.property = prompt("Quelle est la valeur de la propriété ?");
}
function deleteProperty(){
    property = prompt("Quelle propriété souhaitez-vous supprimer ?");
    delete user.property;
}
addProperty();
console.log(user);
deleteProperty();
console.log(user);