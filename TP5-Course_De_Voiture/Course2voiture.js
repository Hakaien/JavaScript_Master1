$(window).ready(function () {

    var nIntervId;
    // définition du constructeur pour une voiture
    class Voiture {
        constructor(id, x, y, img) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.img = img;
            this.dessiner(id, img);
        }

    };
        // "Méthode" de dessin
        Voiture.prototype.dessiner = function (id, img) {
        let elt = "<img id="+id+" src=" + img + ">";
        $("#car").append(elt);
    }

    var car1 = new Voiture("car1", 1, 130, "img/car1.png");
    var car2 = new Voiture("car2", 1, 360, "img/car2.png");

    // Positionnement initial des voitures
    $("#car1").css({ position: "absolute", right: car1.x, top: car1.y });
    $("#car2").css({ position: "absolute", right: car2.x, top: car2.y });

    // Génère un random de 0 à 15 
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // Méthode de déplacement des voitures
    function deplacerAGauche(distance) {
        car1.x += getRandomInt(15);
        car2.x += getRandomInt(15);
        $("#car1").css({ position: "absolute", right: car1.x, top: car1.y });
        $("#car2").css({ position: "absolute", right: car2.x, top: car2.y });
    }

    // !!!!!!!!!!!!
    // boutton "GO"
    $("#btnGo").on("click", function () {
        nIntervId = setInterval(deplacerAGauche, [100]);
    })


    // ---------------------------
    // fonction d'arrêt
    function arretDeplacer() {
        clearInterval(nIntervId);
    }
    // Boutton stop
    $("#btnStop").on("click", function () {
        arretDeplacer();
    })

    // Boutton remise à zéro des voitures
    $("#btnReset").on("click", function () {
        arretDeplacer();
        car1.x = 1;
        car2.x = 1;
        $("#car1").css({ position: "absolute", right: car1.x, top: car1.y });
        $("#car2").css({ position: "absolute", right: car2.x, top: car2.y });
    })
})                        