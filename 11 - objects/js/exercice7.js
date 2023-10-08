/**### Exercice 7 : Parcours d'Objets
3. Parcourez le tableau `listeVoitures` et affichez des informations sur chaque voiture.
 */

listeVoitures.forEach(voiture => {
    console.log("Dans un foreach il y a une " + voiture.marque + " " 
    + voiture.modele + " de " + voiture.annee);
});
//avec un for i
console.log("------------Avec un for i-");
for (let i = 0; i < listeVoitures.length; i++) {
    let voiture = listeVoitures[i];
    console.log("Voiture " + (i + 1) + ":");
    console.log("Marque: " + voiture.marque);
    console.log("Modèle: " + voiture.modele);
    console.log("Année: " + voiture.annee);
    console.log("------------");
  }
  