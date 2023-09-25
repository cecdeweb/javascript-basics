/**DOUBLON ## Exercice 2 : Comparaison de Chaînes

Cet exercice vous permettra de pratiquer la comparaison de chaînes de caractères en utilisant l'opérateur de comparaison strict `===`.

3. Créez deux chaînes de caractères avec des valeurs différentes.

4. Utilisez l'opérateur de comparaison strict `===` pour vérifier si les chaînes sont strictement égales.

5. Utilisez `console.log` pour afficher le résultat de la comparaison dans la console.
 */
let caract1 = "diff";
let caract2 = "10";

if(caract1 === caract2){
    console.log(caract1 + " est identique en genre et nombre que " + caract2);
} else{
    console.log(caract1 + " est différent en genre ou nombre que " + caract2);
}