/**## Exercice 4 : Gestion des Dates
Cet exercice vous permettra de manipuler des dates en utilisant des fonctions natives.
3. Écrivez une fonction `afficherDate` qui retourne la date et l'heure actuelles au 
format "jour/mois/année, heure:minute:seconde".
4. Écrivez une fonction `calculerAge` qui prend une année de naissance en paramètre 
et retourne l'âge actuel de la personne.
 */
function showDate(){
    let dateToDay = new Date();
    console.log(dateToDay.toLocaleString('Fr'));
    let day = dateToDay.getDay();
    let month = dateToDay.getMonth();
    let year = dateToDay.getFullYear();
    let hour = dateToDay.getHours();
    let minute = dateToDay.getMinutes();
    let seconde = dateToDay.getSeconds();
    let dateFormat = day + "/" + month + "/" + "/" + year + " , " + hour + ":" + minute + ":" + seconde;
    console.log(dateFormat);
    return dateFormat;
}
showDate();