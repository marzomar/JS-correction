// Déclaration d'une variable pour le nombre maximum
let maxNumber = 50; // Vous pouvez choisir n'importe quel nombre

// Boucle for pour afficher les nombres de 1 à maxNumber
for (let i = 1; i <= maxNumber; i++) {
    console.log(i); // Affiche la valeur de i à chaque itération
}
// Boucle for pour afficher les nombres de 1 à maxNumber avec "fizz" et "buzz"
for (let i = 1; i <= maxNumber; i++) {
    if (i % 7 === 0) {
        console.log("fizz"); // Affiche "fizz" pour les multiples de 7
    } else if (i % 5 === 0) {
        console.log("buzz"); // Affiche "buzz" pour les multiples de 5
    } else {
        console.log(i); // Affiche la valeur de i pour les autres nombres
    }
}

//Utilisation d'un switch et d'une boucle for

// Boucle for avec un switch pour afficher les nombres de 1 à maxNumber avec "fizz" et "buzz"
for (let i = 1; i <= maxNumber; i++) {
    switch (true) {
        case (i % 7 === 0):
            console.log("fizz");
            break;
        case (i % 5 === 0):
            console.log("buzz");
            break;
        default:
            console.log(i);
            break;
    }
}

// Utilisation d'une boucle while

// Déclaration de la variable 'i' initialisée à 1
let i = 1;

// Boucle while pour afficher les nombres de 1 à maxNumber avec "fizz" et "buzz"
while (i <= maxNumber) {
    if (i % 7 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i%7 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
    i++; // Incrémente 'i' de 1 à chaque itération
}


//Utilisation d'un opérateur ternaire

// Boucle for avec des opérateurs ternaires pour afficher les nombres de 1 à maxNumber avec "fizz" et "buzz"
for (let i = 1; i <= maxNumber; i++) {
    console.log(i % 7 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i);
}









