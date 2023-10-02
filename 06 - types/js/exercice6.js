/**### Exercice 6 : Manipulation de Dates
Dans cet exercice, vous explorerez la manipulation des dates et des chaînes de caractères.
3. Créez une variable `dateString` qui contient une date sous forme de chaîne de caractères 
(par exemple, `"2023-09-10"`).
4. Utilisez des opérations de conversion pour extraire l'année, le mois et le jour de `dateString` 
et affichez-les dans la console. */
let dateString = "2023-01-10";
let dateToDate = new Date(dateString);
console.log("Date complète de l'objet new Date : " + dateToDate);
console.log("Date de l'objet avec getDay : " + dateToDate.toLocaleDateString('Fr'));