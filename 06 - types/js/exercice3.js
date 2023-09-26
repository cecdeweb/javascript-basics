/**### Exercice 3 : Manipulation de Données de Différents Types
Dans cet exercice, vous allez travailler avec des données de différents types et découvrir comment elles 
interagissent en JavaScript.
3. Vous avez une variable `total` qui contient un nombre.
4. Créez une variable `message` qui contient une chaîne de caractères.
5. Utilisez la conversion de types pour concaténer `message` et `total` pour afficher un message complet 
dans la console.
 */
let total = 1200;
let message = 'la valeur est de ';
let totalStr = String(total);
console.log(message + totalStr);