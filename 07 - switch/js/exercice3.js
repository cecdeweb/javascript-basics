/**## Exercice 3 : Langages de Programmation
Dans cet exercice, vous allez créer une liste de langages de programmation et utiliser la structure `switch` 
pour afficher des informations sur un langage en fonction de son nom.
3. Créez une variable `langage` et attribuez-lui le nom d'un langage de programmation.
4. Utilisez la structure `switch` pour afficher des informations sur le langage sélectionné, telles que sa 
popularité, son utilisation, ou toute autre information pertinente, dans la console.
 */
let lang = ['Java', 'Javascript', 'PHP', 'Python'];
function showInfoLanguage(l){
    for(i=0 ; i<l.length; i++){
        console.log(l[i] + "\n");
    }
    let choiceLang = prompt("Sur quel language souhaitez-vous obtenir des informations ?");
    switch(choiceLang){
        case 'Java':
            console.log("Le langage Java ...");
            break;
        case 'Javascript':
            console.log("Le langage Javascript ...");
            break;
        case 'PHP':
            console.log("Le langage PHP ...");
            break;
        case 'Python':
            console.log("Le langage Python ...");
            break;
        default:
            console.log("Merci de saisir un langage de la liste ci-dessus et de respecter la casse.");
    }
}
showInfoLanguage(lang);