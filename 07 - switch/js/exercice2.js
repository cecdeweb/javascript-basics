/**## Exercice 2 : Saisons de l'Année
Cet exercice vous permettra d'utiliser la structure `switch` pour afficher la saison de l'année en fonction d'un mois donné.
3. Créez une variable `mois` et attribuez-lui un numéro de 1 à 12, représentant un mois de l'année.
4. Utilisez la structure `switch` pour afficher la saison correspondante dans la console.
 */
let monthOfYearh = prompt("Pour quel mois de l'année souhaitez-vous obtenir la saison correspondante ? Saisir un nombre entre 1 et 12");
function saisonOfYear(m) {
    switch (m) {
        case '1':
            console.log("Janvier est en : hiver");
            break;
        case '2':
            console.log("février est en : hiver");
            break;
        case '3':
            console.log("mars est au : printemps");
            break;
        case '4':
            console.log("avril est au : printemps");
            break;
        case '5':
            console.log("mai est au : printemps");
            break;
        case '6':
            console.log("juin est en : été");
            break;
        case '7':
            console.log("juillet est en : été");
            break;
        case '8':
            console.log("aout est en : été");
            break;
        case '9':
            console.log("septembre est en : automne");
            break;
        case '10':
            console.log("octobre est en : automne");
            break;
        case '11':
            console.log("novembre est en : automne");
            break;
        case '12':
            console.log("décembre est en : hiver");
            break;
        default:
            console.log("Saisissez un nombre entre 1 et 12");
    }
}
saisonOfYear(monthOfYearh);