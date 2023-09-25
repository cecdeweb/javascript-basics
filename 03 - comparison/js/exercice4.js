/**### Exercice 4 : Comparaison de Dates

Dans cet exercice, vous allez pratiquer la comparaison de dates en utilisant les objets `Date` et les opérateurs de comparaison.

1. Ouvrez le fichier `exercice4.js` dans votre éditeur de code.

2. Vous trouverez un commentaire indiquant où écrire votre code.

3. Créez deux objets `Date` représentant deux dates différentes.

4. Utilisez les opérateurs de comparaison (`<`, `>`, `<=`, `>=`, `==`, `!=`) pour comparer ces deux dates.

5. Utilisez `console.log` pour afficher les résultats des comparaisons dans la console.
 */
const date1 = new Date('2013-09-01 00:00:00');
const date2 = new Date('2013-09-20 00:00:00');
const formatDate2 = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short' });

if(date1>date2){
    console.log(date1 +" est supérieur à "+ date2);
}else if(date1<date2){
    console.log(date1 +" est inférieur à "+ date2);
}else{
    console.log(date1 + " est égale à " + date2);
}