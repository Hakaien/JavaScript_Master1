window.addEventListener("load", function () {

    var valA = document.getElementById("valA");
    var valB = document.getElementById("valB");
    var valC = document.getElementById("valC");
    var info = document.getElementById("info");

    var delta = document.getElementById("delta");
    var equation = document.getElementById("equation");
    var racine1 = document.getElementById("racine1");
    var racine2 = document.getElementById("racine2");

    var btn = document.getElementById("calcul");
    var btnReset = document.getElementById("reset");

    //------DECLA
    //------

    btn.addEventListener("click", validation);
    function validation(event) {
        if (valA.validity.valueMissing || valA.validity.patternMismatch) {
            info.innerHTML = "Veuillez remplir tout les champs !";
            info.style.color = "red";
            return false;
        }
        else if (valB.validity.valueMissing || valB.validity.patternMismatch) {
            info.innerHTML = "Veuillez remplir tout les champs !";
            info.style.color = "red";
            return false;
        }
        else if (valC.validity.valueMissing || valC.validity.patternMismatch) {
            info.innerHTML = "Veuillez remplir tout les champs !";
            info.style.color = "red";
            return false;
        }
        else if (valA.validity && valB.validity && valC.validity) {
            info.innerHTML = "Valeurs valables"
            info.style.color = "white";

            var valAA = valA.value;
            var valBB = valB.value;
            var valCC = valC.value;
            var deltaResult = (valBB * valBB) - (4 * valAA * valCC);
            delta.innerHTML = "Delta vaut : " + deltaResult;
            console.log(delta);
            console.log(deltaResult);
            btn.addEventListener("click", function () {
                if (deltaResult == 0) {
                    let ra = (-valBB / 2 * valAA);
                    equation.innerHTML = "Les racines de l'équation " + valAA + "X² +" + valBB + "X +" + valCC + " = 0 sont : "
                    racine1.innerHTML = "racine 0 vaut :" + ra;
                    racine2.innerHTML = "";
                    //racine vaut racine 0 ...
                } else if (deltaResult < 0) {
                    equation.innerHTML = "Delta <0 donc pas de racine !";
                    racine1.innerHTML = "";
                    racine2.innerHTML = "";
                } else if (deltaResult > 0) {
                    let ra1 = ((-valBB - (Math.sqrt(deltaResult))) / (2 * valAA));
                    let ra2 = ((-valBB + (Math.sqrt(deltaResult))) / (2 * valAA));
                    equation.innerHTML = "Les racines de l'équation " + valAA + "X² +" + valBB + "X +" + valCC + " = 0 sont : "
                    racine1.innerHTML = "racine 0 vaut :" + (Math.round(ra1 * 100) / 100);
                    racine2.innerHTML = "racine 0 vaut :" + (Math.round(ra2 * 100) / 100);
                    console.log(ra1);
                    console.log(ra2);
                }
            });
        }

        return true;
    }

    btnReset.addEventListener("click", function() {
        document.getElementById("result").innerHTML= "";
    })

}, false);