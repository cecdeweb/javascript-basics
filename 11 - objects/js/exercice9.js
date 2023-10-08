/**### Exercice 9 : Objet Date

Dans cet exercice, vous allez pratiquer la création et la manipulation d'objets `Date`.

1. Ouvrez le fichier `exercice9.js` dans votre éditeur de code.

2. Vous trouverez un commentaire indiquant où écrire votre code.

3. Créez un objet `date` représentant la date actuelle et effectuez des opérations telles que l'ajout de jours.
 */
voiture.addVoiture = function(){
    this.marque = prompt("Quelle est la marque de votre véhicule ?");
    this.modele = prompt("Quelle est le modele de votre véhicule ?");
    this.annee = prompt("Quelle est l'annee de votre véhicule ?");
};
voiture.showVoiture = function(){
    console.log("Marque: " + this.marque);
    console.log("Modèle: " + this.modele);
    console.log("Année: " + this.annee);
    console.log("------------");
};
voiture.addVoiture();
voiture.showVoiture();