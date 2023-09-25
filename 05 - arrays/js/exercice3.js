/**## Exercice 3 : Manipulation des Tableaux

Dans cet exercice, vous allez apprendre à ajouter, supprimer et modifier des éléments d'un tableau.
3. Ajoutez un nouveau fruit à la fin du tableau `fruits`.
4. Supprimez un fruit du tableau.
5. Modifiez le nom d'un fruit existant.
6. Utilisez `console.log` pour afficher le tableau mis à jour dans la console.
 */
// La méthode push() ajoute une valeur à la fin d'un tableau. Elle prend en paramètre la valeur à ajouter.
// La méthode unshift() ajoute une valeur au début d'un tableau. Elle prend en paramètre la valeur à ajouter.
// La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.
// La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.

fruits.push("raisin"); // ajouter avec push en fin de tableau
console.log(fruits);
fruits[fruits.length] = "kiwi"; // ajouter avec méthode pour aller chercher le dernier index du tableau
console.log(fruits);
fruits[3] = "kaki"; // Modifie la valeur à l'index 3
console.log(fruits);
fruits.splice(1,1); // supprime banane : 1 occurence de l'index 1
// La méthode .length donne le nombre d'élément dans un tableau donc le dernier index disponible.
console.log(fruits);
