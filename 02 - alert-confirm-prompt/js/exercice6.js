/**### Exercice 6 : Calculatrice Interactive
Dans cet exercice, vous allez créer une calculatrice interactive en utilisant `prompt` et `alert`. Suivez ces étapes :

1. Ouvrez le fichier `exercice6.js` dans votre éditeur de code.
2. Vous trouverez un commentaire indiquant où écrire votre code.
3. Créez un menu interactif pour permettre à l'utilisateur de choisir une opération (addition, soustraction, multiplication, division).
4. Demandez à l'utilisateur de saisir deux nombres.
5. Effectuez l'opération choisie et affichez le résultat avec `alert`. */

while(0==0){
    let nb1 = parseFloat(prompt("Votre 1er nombre :"));
    let calcSign = prompt("Quelle opération ? (+ - x /) ou s pour sortir");
    let nb2 = parseFloat(prompt("Votre 2e nombre :"));
    
    switch (calcSign){
        case "+":
            alert(nb1+nb2);
            break;
        case "-":
            alert(nb1-nb2);
            break;
        case "*":
            alert(nb1*nb2);
            break;
        case "/":
            alert(nb1/nb2);
            break;
        case "s":
            break;
        default:
            alert("Désolée, une erreur est survenu. Merci de rafraîchir la page.");
            break;
    };
    // condition ajoutée pour sortir de la boucle
    if(calcSign=="s"){
        break;
    }
};



