/**## Partie 2 : Aller plus loin
### Exercice 4 : Création d'un Jeu de Morpion
3. Créez un tableau multidimensionnel pour représenter la grille du jeu de morpion.
4. Implémentez la logique du jeu de morpion, permettant aux joueurs de placer leurs 
symboles (X ou O) dans la grille et de vérifier s'ils ont gagné.
 */
let tableau2 = [];
let nbRow2 = 3;
let nbCol2 = 3;
for (let i=0; i<nbRow2; i++) {
    const row = []; // créé 3 tableaux
    for (let j=0; j<nbCol2; j++) { // pour chaque tableau
        row.push(i * nbCol2 + j + 1); // on ajoute 3 valeurs qui se suivent
    }
    tableau2.push(row); // qu'on pousse dans le tableau
}
console.log(tableau2);
let nbCase = 9;
while(nbCase>0){
    let posRow = parseInt(prompt("Sur quelle ligne souhaitez-vous jouer ?"));
    let posCol = parseInt(prompt("Sur quelle colonne souhaitez-vous jouer ?"));
    if(nbCase%2==0){
        tableau2[posRow-1][posCol-1] = X;
    }else{
        tableau2[posRow-1][posCol-1] = O;
    }
    console.log(tableau2);
    nbCase--
}
