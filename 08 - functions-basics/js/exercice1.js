/**## Exercice 1 : Manipulation des Tableaux
Dans cet exercice, vous allez travailler avec un tableau de nombres et utiliser des 
fonctions natives pour effectuer différentes opérations.
3. Créez un tableau `nombres` contenant au moins 5 nombres.
4. Écrivez une fonction `sommeTableau` qui prend le tableau `nombres` en paramètre 
et retourne la somme de tous les éléments du tableau en utilisant la méthode `reduce`.
5. Écrivez une fonction `moyenneTableau` qui prend le tableau `nombres` en paramètre 
et retourne la moyenne des éléments en utilisant la méthode `reduce`.
6. Écrivez une fonction `trouverMax` qui prend le tableau `nombres` en paramètre et 
retourne la valeur maximale en utilisant la méthode `reduce`.
 */


const numbers = [15,45,85,64,12,1,4];
let total = 0;
function sumNumbers(n){
    n.forEach(el => {
        total+=parseFloat(el);
    });
    console.log("Somme du tableau :"+total);
}
function averageNumbers(n){
    total = total / n.length;
    console.log("Moyenne du tableau :"+total);
}
function reduceNumbers(n){
    console.log(Math.max(...n));
}
sumNumbers(numbers);
averageNumbers(numbers);
reduceNumbers(numbers);