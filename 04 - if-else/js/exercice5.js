/**### Exercice 5 : Sélection de Boisson

Cet exercice vous permettra de créer un programme qui suggère une boisson en fonction de l'âge de l'utilisateur.

3. Demandez à l'utilisateur de saisir son âge à l'aide de `prompt`.

4. Utilisez une structure `if`, `else if` et `else` pour suggérer une boisson en fonction de l'âge.

5. Utilisez `console.log` pour afficher la suggestion dans la console.
 */

let ageUser = prompt('Quel est votre age ?');
if (ageUser < 18 && ageUser >= 15){
    console.log('Vous pouvez boire des sodas ou de l\'eau');
}else if(ageUser < 15){
    console.log('Vous devez boire de l\'eau');
}else{
    console.log('Vous pouvez boire des sodas, de l\'eau ou de l\'alcool mais avec modération');
}