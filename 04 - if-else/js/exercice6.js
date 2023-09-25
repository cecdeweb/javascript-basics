/**### Exercice 6 : Calcul de Remise

Dans cet exercice, vous allez créer un programme qui calcule le montant d'une remise en fonction 
du montant d'achat de l'utilisateur.

3. Demandez à l'utilisateur de saisir le montant de son achat à l'aide de `prompt`.

4. Utilisez une structure `if`, `else if` et `else` pour calculer la remise en fonction du montant d'achat :

   - Si le montant d'achat est supérieur ou égal à 100 €, appliquez une remise de 10 %.
   - Si le montant d'achat est inférieur à 100 € mais supérieur ou égal à 50 €, appliquez une remise de 5 %.
   - Sinon, n'appliquez pas de remise.

5. Utilisez `console.log` pour afficher le montant de la remise et le montant total après la remise dans la 
console. */

let montantAchat = prompt('Quel est le montant de votre achat ?');

if(montantAchat >= 100){
    console.log('Votre achat s\'élève à ' + montantAchat*0.9 + '€');
}else if(montantAchat < 100 && montantAchat >=50){
    console.log('Votre achat s\'élève à ' + montantAchat*0.95 + '€');
}else{
    console.log('Votre achat s\'élève à ' + montantAchat + '€');
}
