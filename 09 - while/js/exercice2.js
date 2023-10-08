/**## Exercice 2 : Calculer la Somme
Dans cet exercice, vous allez utiliser une boucle `while` pour calculer la somme des nombres de 1 à N.
3. Déclarez une variable `n` et attribuez-lui un nombre entier positif.
4. Utilisez une boucle `while` pour calculer la somme des nombres de 1 à `n`.
5. Affichez le résultat de la somme dans la console.
 */
let n2 = 10;
let count2 = 0;
let sum2 = 0;
while(count2<n2){
    count2++;
    sum2+=count2;
}
console.log(sum2); //55