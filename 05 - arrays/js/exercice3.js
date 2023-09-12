// La méthode push() ajoute une valeur à la fin d'un tableau. Elle prend en paramètre la valeur à ajouter.
// La méthode unshift() ajoute une valeur au début d'un tableau. Elle prend en paramètre la valeur à ajouter.

fruits.push("raisin");
console.log(fruits);
// La méthode .length donne le nombre d'élément dans un tableau donc le dernier index disponible.
fruits[fruits.length] = "kiwi";
console.log(fruits);
