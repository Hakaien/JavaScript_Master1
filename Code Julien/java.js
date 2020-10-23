var nbredeCotes;
var nombreUn;
var nombreDeux;
var nombreTrois;
var nombreQuatre;
var nombreCinq;
var nombreSix;
var resultat;
var polygone;

var myButton = document.getElementById("bouton");

myButton.addEventListener("click", function(){

alert('Bienvenue dans notre programme de calcul du périmètre d\'un polygone');
var nbredeCotes = prompt('Combien de cotés a votre polygone ?( Entrez un chiffre compris entre 3 et 6) ');



if (nbredeCotes < 3) {
    alert("Un polygone doit avoir au moins 3 cotés...");
    var nbredeCotes = prompt('Combien de cotés a votre polygone ?'); 
}
if ( nbredeCotes > 6) {
    alert("Cette application est limitée à un nombre de 6 cotés... Désolé");
    var nbredeCotes = prompt('Combien de cotés a votre polygone ?');
}

if (nbredeCotes == 4) {
    var nombreUn = prompt('Quelle est la largeur ?');
    var nombreDeux = prompt('Quelle est la longueur ?');
    if (nombreUn == nombreDeux) {
        resultat = (nombreUn * 4);
        polygone = "carré";
    }
    else {
        resultat = (nombreUn * 2 + nombreDeux * 2);
        polygone = "rectangle";
    }
    alert("Voici donc le périmètre de votre " + polygone + " :" + resultat);
    }

if (nbredeCotes == 3) {
    var nombreUn = prompt('Longueur du premier coté ?');
    var nombreDeux = prompt('Longueur du second coté ?');
    var nombreTrois = prompt('Longueur du troisième coté ?');
    resultat = (nombreUn*1 + nombreDeux*1 + nombreTrois*1);
    polygone = "triangle";
    alert("Voici donc le périmètre de votre " + polygone + " :" + resultat);
}

if (nbredeCotes == 5) {
    var nombreUn = prompt('Longueur du premier coté ?');
    var nombreDeux = prompt('Longueur du second coté ?');
    var nombreTrois = prompt('Longueur du troisième coté ?');
    var nombreQuatre = prompt('Longueur du quatrième coté ?');
    var nombreCinq = prompt('Longueur du cinquième coté ?');
    resultat = (nombreUn*1 + nombreDeux*1 + nombreTrois*1 +nombreQuatre*1 + nombreCinq*1 );
    polygone = "pentagone";
    alert("Voici donc le périmètre de votre " + polygone + " :" + resultat);
}

if (nbredeCotes == 6) {
    var nombreUn = prompt('Longueur du premier coté ?');
    var nombreDeux = prompt('Longueur du second coté ?');
    var nombreTrois = prompt('Longueur du troisième coté ?');
    var nombreQuatre = prompt('Longueur du quatrième coté ?');
    var nombreCinq = prompt('Longueur du cinquième coté ?');
    var nombreSix = prompt('Longueur du sixième coté ?');
    resultat = (nombreUn*1 + nombreDeux*1 + nombreTrois*1 +nombreQuatre*1 + nombreCinq*1 + nombreSix*1 );
    polygone = "hexagone";
    alert("Voici donc le périmètre de votre " + polygone + " :" + resultat);
}


});


