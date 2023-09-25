/**### Exercice 4 : Fusion de Tableaux

Dans cet exercice, vous allez créer deux tableaux distincts et les fusionner en un seul.

3. Créez deux tableaux `tableau1` et `tableau2` contenant des éléments différents.
4. Utilisez une méthode de tableau pour fusionner ces deux tableaux en un seul tableau `tableauFusionne`.
5. Utilisez `console.log` pour afficher le tableau fusionné dans la console.
 */
let tab1 = ["rouge", "vert", "bleu"];
let tab2 = ["violet", "marron", "noir"];
let tab3 = tab1.concat(tab2);
console.log(tab3);