/**## Exercice 1 : Jours de la Semaine
Dans cet exercice, vous allez utiliser la structure `switch` pour afficher des informations sur un jour de la semaine en fonction d'un numéro.
3. Créez une variable `jourDeLaSemaine` et attribuez-lui un numéro de 1 à 7, représentant un jour de la semaine.
4. Utilisez la structure `switch` pour afficher le nom du jour correspondant dans la console.
*/
function nbSem(){
    let jourDeLaSemaine = prompt("Numéro du jour de la semaine :");
    switch (jourDeLaSemaine){
        case '1':
            console.log('Lundi');
            break;
        case '2':
            console.log('Mardi');
            break;
        case '3':
            console.log('Mercredi');
            break;
        case '4':
            console.log('Jeudi');
            break;
        case '5':
            console.log('Vendredi');
            break;
        case '6':
            console.log('Samedi');
            break;
        case '6':
            console.log('Samedi');
            break;
        default :
            console.log('Entrer un nombre de 1 à 7')
            nbSem();
    }
}
nbSem();
