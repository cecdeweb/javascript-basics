/**### Exercice 2 : Confirmation de Suppression
Cet exercice vous permettra d'utiliser la fonction `confirm` pour obtenir la confirmation de l'utilisateur avant de réaliser une action.
3. Utilisez `confirm` pour demander à l'utilisateur s'il est sûr de vouloir supprimer un élément.
4. En fonction de la réponse de l'utilisateur (true ou false), affichez un message approprié à l'aide de `alert`.
 */
let message = "Voulez-vous supprimer ?";
if (confirm(message)){
    alert("Votre message est supprimé");
} else {
    alert("Votre message est conservé.");
}