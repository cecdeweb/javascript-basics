/**## Exercice 1 : Compter jusqu'à N
Dans cet exercice, vous allez créer une boucle `while` pour compter jusqu'à un nombre spécifié.
3. Déclarez une variable `n` et attribuez-lui un nombre entier positif.
4. Utilisez une boucle `while` pour afficher les nombres de 1 à `n` dans la console.
 */
const n1 = parseInt(prompt("Donner un nombre entier"));
let count = 0;
while(count<n1){
    count++;
    console.log(count);
}