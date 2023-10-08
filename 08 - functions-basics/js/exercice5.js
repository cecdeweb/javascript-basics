/**## Exercice 5 : Manipulation des Fonctions
Dans cet exercice, vous allez manipuler des fonctions en JavaScript.
3. Écrivez une fonction `creerFonction` qui prend un nombre `n` en paramètre et 
retourne une nouvelle fonction qui ajoute `n` à un nombre donné.
4. Utilisez la fonction créée pour créer deux fonctions : `ajouter5` qui ajoute 5 
à un nombre, et `ajouter10` qui ajoute 10 à un nombre.
5. Utilisez ces fonctions pour effectuer des opérations mathématiques.

CODE RECUP CHATGPT pas compris la logique

 */
function creerFonction(n) {
    return function(x) {
      return x + n;
    };
  }
  
  const ajouter5 = creerFonction(5);
  const ajouter10 = creerFonction(10);
  
  console.log(ajouter5(10)); // 15
  console.log(ajouter10(10)); // 20