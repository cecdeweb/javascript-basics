/**## Partie 2 : Aller plus loin

### Exercice 4 : Vérification d'Âge

Dans cet exercice, vous allez créer un programme qui vérifie si un utilisateur est majeur en fonction de son âge.

3. Demandez à l'utilisateur de saisir son âge à l'aide de `prompt`.

4. Utilisez une structure `if` pour vérifier si l'utilisateur est majeur (âge >= 18) ou mineur.

5. Utilisez `console.log` pour afficher un message approprié dans la console.
 */
let ageUser = new Date(prompt('Quel est votre date de naissance ? (Sous la forme JJ/MM/AAAA)')).getFullYear();
const dateNow = new Date().getFullYear();
let age = dateNow - ageUser;
if (age < 18){
    alert('Vous êtes mineur');
}else{
    alert('Vous êtes majeur')
}
