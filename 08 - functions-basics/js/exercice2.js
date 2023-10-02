/**## Exercice 2 : Manipulation des Chaînes
Cet exercice vous permettra de manipuler des chaînes de caractères en utilisant des 
fonctions natives.
3. Vous avez une chaîne de caractères `phrase` contenant du texte.
4. Écrivez une fonction `compterMots` qui prend la chaîne `phrase` en paramètre et 
retourne le nombre de mots qu'elle contient en utilisant des méthodes de chaînes natives.
5. Écrivez une fonction `inverserPhrase` qui prend la chaîne `phrase` en paramètre et 
retourne la même phrase mais inversée (le dernier mot devient le premier, etc.) en 
utilisant des méthodes de chaînes natives. */

let sentence = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos beatae modi dolores.";
let countW = 0;
let invertSentence = "";
function countWords(s){
    countW = sentence.split(" ").length;    
    console.log(countW);
}
function invertWords(s){
    
}
countWords(sentence);