// Fonction intrusive non conseillé, lecture immédiate sur html

var text = "Merci d'avoir ouvert le poussin";

function affiche() {
    document.getElementById("postIt").style.visibility = "visible";
    document.getElementById("postIt").innerHTML = text;
}

// function cache() {
//     document.getElementById("postIt").style.visibility = "hidden";
// }

window.addEventListener("load", function () {

    // Cache du post-it
    // var btnA = document.getElementById("affiche");

    // btnA.addEventListener("click", function () {
    //     document.getElementById("postIt").style.visibility = "visible";
    //     document.getElementById("postIt").innerText = "Merci blabl afficher";
    // }, false);

    var btnC = document.getElementById("cache");

    btnC.addEventListener("click", function () {
        document.getElementById("postIt").style.visibility = "hidden";
    }, false);

    // Survol du texte

    var survol = document.getElementById("survol");

    survol.addEventListener("mouseover", function () {
        document.getElementById("postIt").style.visibility = "visible";
        document.getElementById("postIt").innerText = "C'est gentil de me survoler";
    });

    survol.addEventListener("mouseout", function () {
        document.getElementById("postIt").style.visibility = "hidden";
    });

});