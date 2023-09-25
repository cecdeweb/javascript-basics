/**### Exercice 4 : Gestionnaire de Tâches
Dans cet exercice, vous allez créer un gestionnaire de tâches interactif en utilisant `prompt` et `alert`. Suivez ces étapes :
3. Créez un tableau vide pour stocker les tâches.
4. Utilisez `prompt` pour permettre à l'utilisateur d'ajouter, supprimer ou afficher des tâches.
5. Affichez les tâches dans `alert` pour les afficher à l'utilisateur.
 */
let Tasks =[];

while (cde = prompt("Voulez-vous 1- Ajouter, 2- Supprimer, 3-Afficher ou 4-Sortir ?")) {
    if (cde == 1){
        Tasks.push(prompt("Entrer votre tâche :"));
    }
    if (cde == 2){
        let nbSup = prompt('Quelle numéro de tâche voulez-vous supprimer ?');
        Tasks.splice(Tasks[nbSup],1);
        alert(Tasks[nbSup]);
    }
    if (cde == 3){

        let listTasks=[];
        for (const tache of Tasks){
            listTasks[Tasks.indexOf(tache)] = [Tasks.indexOf(tache) + " - " + tache];
            console.log(tache);
        }
        alert(listTasks.join(`\n`));
    }
    if (cde == 4){
        break;
    }
}
