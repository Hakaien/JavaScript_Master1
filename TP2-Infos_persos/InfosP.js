window.addEventListener("load", function () {

    var nom = document.getElementById("nom");
    var nomSpan = document.getElementById("nomSpan");
    var nomRegex = /^[a-zA-Z_-]{4,16}$/;

    var prenom = document.getElementById("prenom");
    var prenomSpan = document.getElementById("prenomSpan");
    var prenomRegex = /^[a-zA-Z_-]{4,16}$/;

    var email = document.getElementById("email");
    var emailSpan = document.getElementById("emailSpan");
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var btnEnvoi = document.getElementById("envoi");


    // -Pour info- nom.addEventListener("focus", function () {     );    
    nom.addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
        if (nom.value.match(nomRegex)) {
            nom.style.color = "green";
            nom.style.border = "1px solid green";
        } else { nom.style.color = "red"; };
    });


    prenom.addEventListener("keyup", function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
        if (prenom.value.match(prenomRegex)) {
            prenom.style.color = "green";
            prenom.style.border = "1px solid green";
        } else { prenom.style.color = "red"; };
    })

    btnEnvoi.addEventListener("click", function () {

        try {
            if (nom.value.match(nomRegex)) {
                nomSpan.innerText = "gg";
                nomSpan.style.color = "green";
                nom.style.border = "1px solid green";
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            nomSpan.innerText = error;
            nomSpan.style.color = "red";
            nom.style.border = "1px solid red";
        }


        try {
            if (prenom.value.match(prenomRegex)) {
                prenomSpan.innerText = "gg";
                prenomSpan.style.color = "green";
                prenom.style.border = "1px solid green";
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            prenomSpan.innerText = error;
            prenomSpan.style.color = "red";
            prenom.style.border = "1px solid red";
        }


        try {
            if (email.value.match(emailRegex)) {
                emailSpan.innerText = "gg";
                emailSpan.style.color = "green";
                email.style.border = "1px solid green";
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            emailSpan.innerText = error;
            emailSpan.style.color = "red";
            email.style.border = "1px solid red";
        }

    });


});