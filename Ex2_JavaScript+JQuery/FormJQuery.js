// Chargement du HTML avant le JQuery
$(document).ready(function () {


    $("#test").click(function () {
        console.log("pouf");

        function div() {
            let x = prompt('Entrez un premier nombre (numérateur)');
            let y = prompt('Entrez un deuxième nombre (dénominateur)');

            if (isNaN(x) || isNaN(y) || x == '' || y == '') {
                throw new Error('Merci de rentrer deux nombres');
            } else if (y == 0) {
                throw new Error('Division par 0 impossible')
            } else {
                alert(x / y);
            }
        }

        try {
            div();
        } catch (err) {
            alert(err.message);
        }
    })

    //Test momo

    $("#momo").click(function () {
        let pseudo = $("#pseudo");
        let pseudoSpan = $("#pseudoSpan");
        let pseudoRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        console.log($("#pseudo").val);
        console.log(pseudo.value);
           

        try {
            if (pseudo.value != pseudoRegex) {
                throw new Error("Valeurs incorrectes, merci de renter lettres + chiffres !");
            } else if (pseudo.value == "") {
                throw new Error("Veuillez entrer un pseudo !");
            };
        } catch (err) {
            alert(err.message);
        }

    })



})