/**### Exercice 5 : Filtrage de Tableau
Dans cet exercice, vous allez filtrer les éléments d'un tableau en fonction d'un critère.
3. Créez un tableau `nombres` contenant une série de nombres.
4. Utilisez une méthode de tableau pour filtrer les nombres pairs du tableau.
5. Utilisez `console.log` pour afficher le tableau filtré dans la console.
 */
let tab4 = [1,2,3,4,5,6];
let tabNbrPair = tab4.filter((number) => number % 2 === 0 );
console.log(tabNbrPair);