window.addEventListener("load", function () {

    var cartes = [
        { "id": 1, "nom": "AsCoeur", "point": 11, "force": 8 },
        { "id": 2, "nom": "RoiCoeur", "point": 10, "force": 7 },
        { "id": 3, "nom": "DameCoeur", "point": 9, "force": 6 },
        { "id": 4, "nom": "ValetCoeur", "point": 8, "force": 5 },
        { "id": 5, "nom": "DixCoeur", "point": 7, "force": 4 },
        { "id": 6, "nom": "NeufCoeur", "point": 6, "force": 3 },
        { "id": 7, "nom": "HuitCoeur", "point": 5, "force": 2 },
        { "id": 8, "nom": "SeptCoeur", "point": 4, "force": 1 },
        { "id": 9, "nom": "AsCarreau", "point": 11, "force": 8 },
        { "id": 10, "nom": "RoiCarreau", "point": 10, "force": 7 },
        { "id": 11, "nom": "DameCarreau", "point": 9, "force": 6 },
        { "id": 12, "nom": "ValetCarreau", "point": 8, "force": 5 },
        { "id": 13, "nom": "DixCarreau", "point": 7, "force": 4 },
        { "id": 14, "nom": "NeufCarreau", "point": 6, "force": 3 },
        { "id": 15, "nom": "HuitCarreau", "point": 5, "force": 2 },
        { "id": 16, "nom": "SeptCarreau", "point": 4, "force": 1 },
        { "id": 17, "nom": "AsTrefle", "point": 11, "force": 8 },
        { "id": 18, "nom": "RoiTrefle", "point": 10, "force": 7 },
        { "id": 19, "nom": "DameTrefle", "point": 9, "force": 6 },
        { "id": 20, "nom": "ValetTrefle", "point": 8, "force": 5 },
        { "id": 21, "nom": "DixTrefle", "point": 7, "force": 4 },
        { "id": 22, "nom": "NeufTrefle", "point": 6, "force": 3 },
        { "id": 23, "nom": "HuitTrefle", "point": 5, "force": 2 },
        { "id": 24, "nom": "SeptTrefle", "point": 4, "force": 1 },
        { "id": 25, "nom": "AsPique", "point": 11, "force": 8 },
        { "id": 26, "nom": "RoiPique", "point": 10, "force": 7 },
        { "id": 27, "nom": "DamePique", "point": 9, "force": 6 },
        { "id": 28, "nom": "ValetPique", "point": 8, "force": 5 },
        { "id": 29, "nom": "DixPique", "point": 7, "force": 4 },
        { "id": 30, "nom": "NeufPique", "point": 6, "force": 3 },
        { "id": 31, "nom": "HuitPique", "point": 5, "force": 2 },
        { "id": 32, "nom": "SeptPique", "point": 4, "force": 1 },
    ]

    var patate = new Array();
    var pomme = new Array();
    var scorePatate = document.getElementById("scorePatate");
    var nbrPatate = document.getElementById("nbrPatate");
    var scorePomme = document.getElementById("scorePomme");
    var nbrPomme = document.getElementById("nbrPomme");

    var btnLancer = document.getElementById("lancer");
    var btnTour = document.getElementById("paquetRouge");

    var zoneBleu = document.getElementById("zoneBleu");
    var zoneRouge = document.getElementById("zoneRouge");
    var paquetBleu = document.getElementById("paquetBleu");
    var paquetRouge = document.getElementById("paquetRouge");
    var petiteImg = document.getElementById("temp");
    var petiteImg2 = document.getElementById("temp2");
    var petiteImg3 = document.getElementById("temp3");
    var petiteImg4 = document.getElementById("temp4");

    // ----------------------------------------
    // LANCER LA PARTIE
    btnLancer.addEventListener("click", function randomize() {
        let i, j, temp;
        for (i = cartes.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cartes[i]
            cartes[i] = cartes[j];
            cartes[j] = temp;
        }

        patate = cartes.slice(0, 16);
        pomme = cartes.slice(16);
        nbrPatate.innerText = patate.length;
        nbrPomme.innerText = pomme.length;
        scorePatate.innerText = "";
        scorePomme.innerText = "";
        paquetBleu.src = "img/backcartebleuegrande.png"
        paquetRouge.src = "img/backcartegrande.png"
        zoneBleu.src = "";
        zoneRouge.src = "";
        petiteImg.src = "";
        petiteImg2.src = "";

    });
    // ---------------
    // LANCER UN TOUR

    btnTour.addEventListener("click", function () {

        paquetBleu.src = "img/backcartebleuegrande.png"
        paquetRouge.src = "img/backcartegrande.png"
        petiteImg.src = "";
        petiteImg2.src = "";
        petiteImg3.src = "";
        petiteImg4.src = "";
        var result = document.getElementById("result");

        cartePatate = patate[patate.length - 1];
        cartePomme = pomme[pomme.length - 1];

        zoneBleu.src = "img/" + cartePatate.nom + ".png";
        zoneRouge.src = "img/" + cartePomme.nom + ".png";

        if (patate.length != 0 && pomme.length != 0) {

            // -----------
            if (cartePatate.force > cartePomme.force) {
                // 1- ajout des points
                scorePatate.innerText = (scorePomme.innerText) * 1 + (cartePatate.point + cartePomme.point);
                // 2-Redistribue les cartes
                patate.unshift(cartePatate);
                patate.unshift(cartePomme);
                patate.pop();
                pomme.pop();
                nbrPatate.innerText = patate.length + "/ av :" + (patate.length - 1);
                nbrPomme.innerText = pomme.length + "/ av :" + (pomme.length + 1);
            } else if (cartePatate.force < cartePomme.force) {
                // 1-
                new Number;
                scorePomme.innerText = Number(scorePomme.innerText) + (cartePatate.point + cartePomme.point);
                // 2-
                pomme.unshift(cartePatate);
                pomme.unshift(cartePomme);
                patate.pop();
                pomme.pop();
                nbrPatate.innerText = patate.length + "/ av :" + (patate.length + 1);
                nbrPomme.innerText = pomme.length + "/ av :" + (pomme.length - 1);
            } else if (cartePatate.force == cartePomme.force) {


                paquetBleu.src = "img/backcartebleuegrandebatrect.png"
                paquetRouge.src = "img/backcartegrandebatrect.png"
                petiteImg.src = zoneBleu.src;
                petiteImg2.src = zoneRouge.src;

                var tabTemp = new Array;
                tabTemp.unshift(cartePatate);
                tabTemp.unshift(cartePomme);
                patate.pop();
                pomme.pop();

                var cartePatateRandom = patate[Math.floor(Math.random() * patate.length)];
                var cartePommeRandom = pomme[Math.floor(Math.random() * pomme.length)];
                petiteImg3.src = "img/" + cartePatateRandom.nom + ".png";
                petiteImg4.src = "img/" + cartePommeRandom.nom + ".png";
                tabTemp.unshift(cartePatateRandom);
                tabTemp.unshift(cartePommeRandom);
                patate.pop(cartePatateRandom);
                pomme.pop(cartePommeRandom);

                cartePatate = patate[patate.length - 1];
                cartePomme = pomme[pomme.length - 1];
                zoneBleu.src = "img/" + cartePatate.nom + ".png";
                zoneRouge.src = "img/" + cartePomme.nom + ".png";
                console.log(tabTemp);
                if (patate.length != 2 && pomme.length != 2) {
                    if (cartePatate.force > cartePomme.force) {
                        // 1- ajout des points
                        scorePatate.innerText = (scorePomme.innerText) * 1 + (cartePatate.point + cartePomme.point);
                        // 2-Redistribue les cartes
                        patate.unshift(tabTemp[0]);
                        patate.unshift(tabTemp[1]);
                        patate.unshift(tabTemp[2]);
                        patate.unshift(tabTemp[3]);
                        console.log(patate);
                        console.log(pomme);
                    }
                    else if (cartePatate.force < cartePomme.force) {
                        // 1-
                        new Number;
                        scorePomme.innerText = Number(scorePomme.innerText) + (cartePatate.point + cartePomme.point);
                        // 2-
                        pomme.unshift(tabTemp[0]);
                        pomme.unshift(tabTemp[1]);
                        pomme.unshift(tabTemp[2]);
                        pomme.unshift(tabTemp[3]);
                        console.log(patate);
                        console.log(pomme);
                    }
                } else { result.innerText = "gg"; }
            }
            // -----------
        } else {
            result.innerText = "gg";
        }
        // // ----------
    })
})