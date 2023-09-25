/**DOUBLON ## Exercice 3 : Comparaison de Booléens

Cet exercice vous aidera à comprendre comment les opérateurs logiques (`&&`, `||`) peuvent être utilisés pour évaluer des expressions booléennes.

3. Créez deux variables booléennes `a` et `b` avec des valeurs `true` ou `false`.

4. Utilisez les opérateurs logiques (`&&` et `||`) pour créer une expression conditionnelle complexe.

5. Utilisez `console.log` pour afficher le résultat de l'expression dans la console.
 */
let a = true;
let b = false;
if (a || b){
    console.log('a ou b est true');
}else if(a && b){
    console.log('a et b sont true');
}else{
    console.log('ni a ni b est true')
}