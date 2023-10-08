/**## Exercice 3 : Recherche d'un Élément
Cet exercice vous permettra d'utiliser une boucle `while` pour rechercher un élément 
dans un tableau.
3. Créez un tableau `elements` contenant plusieurs éléments (chaînes de caractères, 
    nombres, etc.).
4. Déclarez une variable `elementRecherche` et attribuez-lui la valeur de l'élément 
que vous souhaitez rechercher dans le tableau.
5. Utilisez une boucle `while` pour parcourir le tableau et déterminer si l'élément 
recherché est présent.
6. Affichez un message dans la console indiquant si l'élément a été trouvé ou non.
 */
let tbl3 = [1,"joli", false, 1.55, true, false, "beau", "soleil"];
let valueSearch3 = false;
let nbResponse = 0;
let count3 = 0;
while(count3<tbl3.length){
    if(valueSearch3 == tbl3[count3]){
        nbResponse += 1;
    }
    count3++;
}
if(nbResponse>0){
    console.log("La valeur a été trouvé " + nbResponse + " fois dans le tableau");
}else{
    console.log("La valeur n'a pas été trouvé dans le tableau");
}