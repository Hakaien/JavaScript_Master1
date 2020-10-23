window.addEventListener("load", function() {


var btn = document.getElementById("valid");
var contenu = document.getElementById("contenu");
var missCont = document.getElementById("misscont");

var btn2 = document.getElementById("valmail");
var mail = document.getElementById("mail");
var resultmail = document.getElementById("resultmail");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Format d'alerte simple avec juste le messsage contenu dans l'input
// btn.addEventListener("click", function() {
//                 alert(document.getElementById("contenu").value);
//      }, false);

// Format 2 : validation avec message d'erreur

btn.addEventListener("click", validation);

function validation(event){
    //si le champ est videuh
    if (contenu.validity.valueMissing){
        event.preventDefault();
        missCont.textContent = "Texte manquant";
        missCont.style.color = "red" ;
    }
    else if (contenu.validity) {
        alert(contenu.value);
    }
}

btn2.addEventListener("click", ValidateEmail);

function ValidateEmail(inputText) {
    if (mail.value.match(mailformat)) {
        alert("Valid email adress" + " : " + mail.value);
        resultmail.textContent = "Adresse validé";
        resultmail.style.color = "blue";
        return true;
    }
    else {
        alert("Invalid email adresse !")
        resultmail.textContent = "adress invalid";
        resultmail.style.color = "red";
        return false;
    }
}

     
});