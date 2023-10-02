/**### Exercice 5 : Navigation dans un Jeu
Dans cet exercice, vous allez simuler la navigation d'un joueur dans un jeu en 
utilisant la structure `switch`.
3. Créez une variable `direction` et attribuez-lui une valeur représentant une 
direction de navigation (par exemple, "haut", "bas", "gauche", "droite").
4. Utilisez la structure `switch` pour déplacer le joueur en fonction de la direction 
et afficher sa nouvelle position dans la console.
 */
document.addEventListener('keydown', function (event) {
    //représentation de la map
    // let map2d = [
    //     [0,1,2,3,4,5,6,7,8,9,10],
    //     [0,1,2,3,4,5,6,7,8,9,10]
    // ]
    //initialisation du point de départ
    let moveX = 0;
    let moveY = 0;
    let positionDepart = map2d[0+moveX][0+moveY];
    //récupérer la touche saisie à l'écoute
    let currentKey = event.key;
    console.log(currentKey);
    if(currentKey){
        switch (currentKey) {
            case "ArrowUp":
                moveY++;
                break;
            case "ArrowDown":
                moveY--;
                break;
            case "ArrowRight":
                moveX++;
                break;
            case "ArrowLeft":
                moveX--;
                break;
            // default:
            //     console.log("Toucher une touche fléchée");
            //     break;
        }
    }    
});
//modifier le point dans la bonne direction avec +1 ou -1 à la direction
//fonction qui en fonction de la touche saisie avec switch
//si ArrowUp add +1 à index 2 soit map2d[0][1]
//si ArrowDown subs -1
//si ArrowRight add +1 index 1 soit map2d[1][0]
//si ArrowLeft subs -1
