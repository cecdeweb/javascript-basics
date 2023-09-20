/*### Exercice 5 : Quiz interactif

Dans cet exercice, vous allez créer un quiz interactif en utilisant `confirm` et `alert`. Suivez ces étapes :
1. Ouvrez le fichier `exercice5.js` dans votre éditeur de code.
2. Vous trouverez un commentaire indiquant où écrire votre code.
3. Créez un ensemble de questions et de réponses.
4. Utilisez `confirm` pour demander à l'utilisateur s'il souhaite commencer le quiz.
5. Posez les questions à l'utilisateur une par une avec `prompt` et vérifiez les réponses.
6. Affichez le score final à l'utilisateur avec `alert`.
*/

if (window.confirm('Souhaitez-vous commencer à jouer ?')){
    let points = 0;
    let Q1 = prompt("Quelle est la principale fonction de l'interface utilisateur (UI) dans un logiciel ou une application ? \n a) Faciliter la communication entre l'utilisateur et le système.\n b) Gérer les performances du matériel.\n c) Créer des bases de données.\n");
    console.log(Q1);
    if (Q1 == 'a' || Q1 == 'A'){
        points += 1;
    }
    console.log(points);
    let Q2 = prompt("Quel est l'objectif principal de l'ergonomie dans la conception de l'interface utilisateur (UI) ?\n a) Assurer la convivialité et la facilité d'utilisation.\n b) Optimiser la sécurité des données.\n c) Maximiser les profits de l'entreprise.");
    if (Q2 == 'a' || Q2 == 'A'){
        points += 1;
    }
    let Q3 = prompt("Quelle est l'importance de la rétroaction utilisateur dans l'amélioration de l'interface utilisateur (UI) ?\n a) Elle n'a aucune importance.\n b) Elle permet d'identifier les problèmes et de les corriger.\n c) Elle concerne uniquement les aspects esthétiques de l'UI.");
    if (Q3 == "b" || Q3 == "B"){
        points += 1;
    }
    alert('Votre score est de : ' + points);
}
