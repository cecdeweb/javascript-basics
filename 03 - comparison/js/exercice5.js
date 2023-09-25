// exercice Marc Brief Analyser le code fourni pour découvrir le message...

const stringCode = "Jk l_[di Z[ ZßYeklh_h b[ c[iiW][$ <ßb_Y_jWj_edi ! Jk Wi c_i [d ŉklh[ jhÞi XWi_gk[ kd[ cßj^eZ[ fekh ZßY^_\\h[h jekj [d ZßYeklhWdj b[i fh_dY_f[i \edZWj[khi Z[ b _d\ehcWj_gk[\" gk[ jk iekfÝeddW_i f[kj#àjh[ fWi `kigk Ö cW_dj[dWdj$ B[ c[iiW][ gk[ jk lWi b_h[ Ze_j h[ij[h Yed\_Z[dj_[b$ Jk d[ Ze_i fWi Z_lkb]k[h b _d\ehcWj_ed jWdj gk[ j[i YWcWhWZ[i d edj fWi jheklß b[ c[iiW][$ ;ij#Y[ gk[ jk [i Z WYYehZ 5 1 9[j WfhÞi#c_Z_ `[ lW_i leki \W_h[ ZßYeklh_h b[i XWi[i Z[ Zeddß[i [j b[kh YedY[fjkWb_iWj_ed$ 9[ij kd jhWlW_b gk[ leki hßWb_i[p [d X_dêc[ YWh Y[ij kd[ jØY^[ gk_ dßY[ii_j[ Z[i fe_dji Z[ lk[ [j Z[i WffhßY_Wj_edi Z_\\ßh[dj[i$ 8ed YekhW][ ! 0"; 
const messageDecrypte="";
/*function comparASCII(){
}*/
//Pour chaque lettre dans la chaîne de caractère
for(i=0; i<stringCode.length; i++){
    // Je vais chercher le code ASCII de ma lettre et je rajoute 10
    let listCode = stringCode.charCodeAt(i) + 10;
    let lettreDecrypte = String.fromCharCode

    console.log(listCode);
    //let lettreDecrypte = String.fromCharCode(codeAscii);
    //messageDecrypte+=lettreDecrypte;
}

/*for (const char of string) {
    if (char === "J") {
        count++;
    }
}
console.log(count);*/ // 2
// charCodeAt > retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée.
// fromCharCode > String.fromCharCode() renvoie une chaîne de caractères créée à partir de points de code UTF-16.
// substr > La méthode substr() retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.


// à quoi correspond l'espace dans le code ascii
// espace = code décimal 32
// la lettre la plus utilisée est le e
// repérer les ponctuations
// ! == . 
// 33 / 46
// Pour passer du cryptage au message -10
// les mots de début de phrase qui sont le plus souvent utilisés
/* 
Tu > 84 / 117 => 33
De (préposition) > D=68 e=101 => 33
Le (déterminant) > L=36 e=101 => 65 
Un (déterminant) > 85 / 110 => 25
Et (conjonction) > 69 / 116 => 47
Il (pronom) > 73 / 108 => 35
Ne (adverbe) > 78 / 101 => 23
Je (pronom) > 74 / 101 => 27
*/ 
// repérer les mots qui se répètent le plus dans le document
// Jk > 74 / 107 = 33 => De ou Tu
// De > 68 / 101 
// Tu > 84 / 117 => écart de 10 constaté avec Jk
// Pour passer du message crypté au message dévoilé il faut donc ajouter 10 au code ASCII
// Wi > 87 / 105 => 97 / 115 => ai
// 
// L = 76
// calculer le décalage dans l'ordre des décimales ascii