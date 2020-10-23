window.addEventListener("load", function () {

    let val1 = document.getElementById("nombre");
    let val2 = document.getElementById("text");
    let btnVerif = document.getElementById("boutonVerif");
    let btnSub = document.getElementById("boutonSub");

    let span1 = document.getElementById("span1");
    let span2 = document.getElementById("span2");

    btnVerif.addEventListener("click", validation);
    function validation(event) {
        //si le champ est videuh
        if (val1.validity.valueMissing || val1.validity.patternMismatch) {
            span1.innerText = "Veuillez entrer un nombre";
        }
        else if (val1.validity) {
            span1.innerText = val1.value;
        }

        if (val2.validity.valueMissing || val2.validity.patternMismatch) {
            span2.innerText = "Veuillez entrer un texte";
        }
        else if (val2.validity) {
            span2.innerText = val2.value;
        }
    }

    btnSub.addEventListener("click", envoi);
    function envoi(event) {
        let val1 = document.getElementById("nombre");
        let val2 = document.getElementById("text");
        location.href = encodeURI("http://127.0.0.1:5500/Ex1_Mon1erCode/PassInfo2.html?nbr="+val1.value+"&txt="+val2.value);
    }


});