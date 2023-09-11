// Your code goes here
let tblTaches =[];
//let cde = prompt("Voulez-vous 1- Ajouter, 2- Supprimer ou 3-Afficher ?");
while (cde = prompt("Voulez-vous 1- Ajouter, 2- Supprimer ou 3-Afficher ?")) {
    if (cde == 1){
        tblTaches.push(prompt("Entrer votre tâche :"));
    }
    if (cde == 2){
        let nbSup = prompt('Quelle numéro de tâche voulez-vous supprimer ?');
        tblTaches.splice(tblTaches[nbSup],1);
        alert(tblTaches[nbSup]);
    }
    if (cde == 3){

        let listTaches=[];
        for (const tache of tblTaches){
            listTaches[tblTaches.indexOf(tache)] = [tblTaches.indexOf(tache) + " - " + tache];
            console.log(tache);
        }
        alert(listTaches.join(`\n`));
    }
    
}
