window.addEventListener("load", function() {

    var text = document.getElementById("text");
    var btnstart = document.getElementById("start");
    var btnpause = document.getElementById("pause");
    var btnstop = document.getElementById("stop");

    var timer;
    var count;

    //-----

//     btnpause.style.visibility = "hidden";
//     btnstop.style.visibility = "hidden";

// btnstart.addEventListener("click", function() {
//     btnpause.style.visibility = "visible";
//     btnstop.style.visibility = "visible";
//     btnstart.style.visibility = "hidden";
// });

// btnpause.addEventListener("click", function() {
//     btnpause.style.visibility = "hidden";
//     btnstart.style.visibility = "visible";
// })

// btnstop.addEventListener("click", function() {
//     btnstop.style.visibility = "hidden";
//     btnpause.style.visibility = "hidden";
//     btnstart.style.visibility = "visible";
// })

function startChrono() {
    btnstart.paramTps = tpsEcoule;
}


//-----
// algo de calcul de nombre haures, minutes et secondes écoulées

var startTime = new Date();
decompte = setInterval(function() {
    // 1- Convertir en secondes :
    var seconds = Math.round(
        (new Date().getTime() - startTime.getTime()) / 1000
        + e.target.paramTps); // e représente l'event déclencheur
        // e.target représente l'objet déclencheur 
        // ici : bouton start ou bouton pause
        // (cette prop a été ajoutée aux boutons)
    // 2- Extraire les heures:   
    var hours = parseInt( seconds / 3600 );
    seconds = seconds % 3600; // secondes restantes 
    // 3- Extraire les minutes:
    var minutes = parseInt( seconds / 60 ); 
    seconds = seconds % 60; // secondes restantes 
    // 4- afficher dans le span 
    chronoP.innerHTML = ajouteUnZero(hours)
        +":"+ajouteUnZero(minutes)
        +":"+ajouteUnZero(seconds);
    // 5- incrémenter le nombre de secondes
    tpsEcoule += 1;
}, 1000); // fin de function anonyme dans setInterval()


});