$(window).ready(function () {

    var nIntervId=null;
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
        let elt = "<img id=" + id + " src=" + img + ">";
        $("#car").append(elt);
    }

    var car1 = new Voiture("car1", 1, 130, "img/car1.png");
    var car2 = new Voiture("car2", 1, 360, "img/car2.png");

    // Positionnement initial des voitures
    $("#car1").css({ position: "absolute", right: car1.x, top: car1.y, });
    $("#car2").css({ position: "absolute", right: car2.x, top: car2.y, });

    // Génère un random de 0 à 15 
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }




    // !!!!!!!!!!!!
    // boutton "GO"
    $("#btnGo").on("click", function () {

        // Méthode de déplacement des voitures
        if (nIntervId==null){
            nIntervId = setInterval(function () {            
                car1.x += getRandomInt(15);
                car2.x += getRandomInt(15);
                $("#car1").css({ position: "absolute", right: car1.x, top: car1.y, left: "" });
                $("#car2").css({ position: "absolute", right: car2.x, top: car2.y, left: "" });

            //récupération de l'élément left puis split pour avoir une valeure numérique sans décimale.
            let car1Arr = $("#car1").css("left");
            let car2Arr = $("#car2").css("left");
            let temp = car1Arr.split(".");
            let temp2 = car2Arr.split(".");
                // condition de victoire car1
                if (temp[0] <= 50) {
                    clearInterval(nIntervId);
                    alert("Rouge a gagné");
                }
                // condition de victoire car2
                else if (temp2[0] <= 50) {
                    clearInterval(nIntervId);
                    alert("Bleu a gagné");
                }
        
            }, 100)
        }
    })

    // ---------------------------
    // fonction d'arrêt
    function arretDeplacer() {
        if (nIntervId!=null){
        clearInterval(nIntervId);
        nIntervId=null;
        }
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
