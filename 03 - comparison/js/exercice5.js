/**### Exercice 5 : Comparaison d'Âges

Cet exercice vous permettra de créer un système de vérification d'âge en utilisant les opérateurs de comparaison.

3. Demandez à l'utilisateur de saisir son année de naissance à l'aide de `prompt`.

4. Calculez son âge en fonction de l'année de naissance et l'année actuelle.

5. Utilisez les opérateurs de comparaison pour vérifier si l'utilisateur est majeur (âge >= 18) ou mineur.

6. Affichez un message approprié à l'utilisateur avec `alert`.
 */
let ageUser = new Date(prompt('Quel est votre année de naissance ? (Sous la forme AAAA)'));
const dateNow = new Date();
const formatDateNow = dateNow.getFullYear();
const formatDateUser = ageUser.getFullYear();
let age = formatDateNow - formatDateUser;
if (age < 18){
    alert('Vous êtes mineur');
}else{
    alert('Vous êtes majeur')
}
