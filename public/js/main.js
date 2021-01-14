// ## EXO1
// ## Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

let reverseNumber = (a) => {
    var splitString = a.split("");
    var rev = splitString.reverse();
    var joinArray = rev.join("");
    return joinArray;
}
console.log(reverseNumber("123456"));

// #### EXO2
// ## Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// ## Qui répond "Le num x est divisible par 2 x:2 = z"
// ## Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

let divPar2 = (a) => {
    switch (a % 2 == 0) {
        case true:
            return `le num ${a} est divisible par 2 -> ${a}/2 = ${a/2}`
        default:
            return `ce nombre n'est pas divisible par 2`
    }
}

console.log(divPar2(10));

// #### EXO3
// ## Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

let logIn = () => {
    let comt = 0;
    do {
        var mdp = prompt('mdp?')
        if (mdp == 'mdp') {
            alert('Vous êtes connectés');
        } else {
            alert('mauvais mdp');
            comt++
        }
    } while (mdp !== 'mdp' && comt !== 3);
}

console.log(logIn());

// #### EXO4
// ## Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// ## Avec la capture d'écran reproduisez les entrées / sorties de la classe

let coding16 = [];

let ajout = (a) => {
    let tab = a.split(' ');
    coding16.push(...tab);
}

let sortir = (b) => {
    if (coding16.indexOf(b) !== -1) {
        coding16.splice(coding16.indexOf(b), 1);
    } else {
    console.log(`${b} ne se trouve pas dans la classe`);
    }
}

do {
    var a = prompt('Veuxtu ajouter ou supprimer une personne? (oui ou non)').toLowerCase();
    if (a === 'oui') {
        let name = prompt('qui veux tu ajouter ou supprimer (prenom)');
        if (coding16.indexOf(name) > -1) {
            sortir(name);
        } else {
            ajout(name);
            coding16 = [...coding16];
        }
    } else if (a === 'non') {
        if (coding16.length === 0) {
            alert('il y a personne');
        } else {
            alert(`d'accord voici la classe ${coding16}`);
        }
    }
} while (coding16.length < 15 && a ==='oui');

console.log(coding16);
