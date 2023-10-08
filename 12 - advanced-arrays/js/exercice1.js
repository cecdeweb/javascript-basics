/**### Exercice 1 : Création d'un Tableau 2D
3. Créez un tableau 2D nommé `tableau` contenant plusieurs tableaux (ligne et colonne).
 */
let tableau1 = [];
let nbRow1 = 3;
let nbCol1 = 3;
for (let i=0; i<nbRow1; i++) {
    const row = []; // créé 3 tableaux
    for (let j=0; j<nbCol1; j++) { // pour chaque tableau
        row.push(i * nbCol1 + j + 1); // on ajoute 3 valeurs qui se suivent
    }
    tableau1.push(row); // qu'on pousse dans le tableau
}
console.log(tableau1);
