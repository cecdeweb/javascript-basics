/**### Exercice 4 : Comparaison de Dates

Dans cet exercice, vous allez pratiquer la comparaison de dates en utilisant les objets `Date` et les opérateurs de comparaison.

3. Créez deux objets `Date` représentant deux dates différentes.
4. Utilisez les opérateurs de comparaison (`<`, `>`, `<=`, `>=`, `==`, `!=`) pour comparer ces deux dates.
5. Utilisez `console.log` pour afficher les résultats des comparaisons dans la console.
 */
const date1 = new Date('2013-09-01');
const date2 = new Date('2013-09-20');
const formatDate1 = date1.toLocaleDateString();
const formatDate2 = date2.toLocaleDateString();

if(formatDate1>formatDate2){
    console.log(formatDate1 +" est supérieur à "+ formatDate2);
}else if(formatDate1<formatDate2){
    console.log(formatDate1 +" est inférieur à "+ formatDate2);
}else{
    console.log(formatDate1 + " est égale à " + formatDate2);
}