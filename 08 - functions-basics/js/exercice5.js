/**## Exercice 5 : Manipulation des Fonctions
Dans cet exercice, vous allez manipuler des fonctions en JavaScript.
3. Écrivez une fonction `creerFonction` qui prend un nombre `n` en paramètre et 
retourne une nouvelle fonction qui ajoute `n` à un nombre donné.
4. Utilisez la fonction créée pour créer deux fonctions : `ajouter5` qui ajoute 5 
à un nombre, et `ajouter10` qui ajoute 10 à un nombre.
5. Utilisez ces fonctions pour effectuer des opérations mathématiques.
 */
let n = parseFloat(prompt("Choisir un nombre"));
function run(n){
    function addNumber(number){
        let addN = parseFloat(prompt("Ajouter un nombre au précédent :"));
        number+=addN;
        console.log(number);
        function AddFive(number){
            let nbForAddFive = parseFloat("Ajouter un nouveau nombre pour qu'on lui ajoute 5 :");
            nbForAddFive+=5;
            console.log(nbForAddFive);
            return nbForAddFive;
        }
        return AddFive();
    }
    return addNumber();
}
run(n);
