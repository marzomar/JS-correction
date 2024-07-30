// Déclaration de la variable 'heure' avec une valeur entre 0 et 24
let age = 18; // Vous pouvez choisir n'importe quel nombre entre 0 et 24

// Mise en place de la structure de contrôle 'if else'
    if ( age < 18 ) {
        // Si 'heure' est inférieure à 10, on affiche "c'est le matin" dans la console
        console.log("T mineur et maigre");
    } else if (age >= 18) {
        // Sinon, si 'heure' est inférieure à 20, on affiche "c'est l’après-midi" dans la console
        console.log("Majeur");
    } else {
        // Sinon, on affiche "c'est le soir" dans la console
        console.log("mort");
    }


function estMajeur(inconnu) {
    // Mise en place de la structure de contrôle 'if else'
    if ( inconnu < 18 ) {
        // Si 'heure' est inférieure à 10, on affiche "c'est le matin" dans la console
        console.log("T mineur et maigre");
    } else if (inconnu >= 18) {
        // Sinon, si 'heure' est inférieure à 20, on affiche "c'est l’après-midi" dans la console
        console.log("Majeur");
    } else {
        // Sinon, on affiche "c'est le soir" dans la console
        console.log("mort");
    }
}

estMajeur(34);
estMajeur(45);
estMajeur(12);
estMajeur(87);
estMajeur(12);

function addition(nbr1, nbr2) {
    let total = nbr1 + nbr2
    return total;
}

console.log(addition(2, 4));
addition(4, 8);
addition(2, 4);
addition(2, 4);