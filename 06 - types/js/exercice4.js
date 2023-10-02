/**### Exercice 4 : Conversion Avancée
Dans cet exercice, vous explorerez des conversions de types avancées en JavaScript.
3. Créez une variable `valeurMixte` qui contient un mélange de types de données.
4. Utilisez des opérations de conversion de types pour obtenir la somme des parties numériques de `valeurMixte` et affichez-la dans la console.
 */
let valeurMixte = [1, 1.5, "texte", false];
let totalNumber = 0;
valeurMixte.forEach(element => {
    if(typeof(element) === 'number'){
        totalNumber += element;
        //console.log(element);
        //console.log(element + " est " + typeof(element));
   } 
});
console.log(totalNumber);