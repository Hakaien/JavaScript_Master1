window.addEventListener("load", function () {

    var pseudo = document.getElementById("pseudo");
    var pseudoSpan = document.getElementById("pseudoSpan");
    var pseudoRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    var mdp = document.getElementById("mdp");
    var mdpSpan = document.getElementById("mdpSpan");
    var mdpRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

    var confirm = document.getElementById("confirm");
    var confirmSpan = document.getElementById("confirmSpan");

    var email = document.getElementById("email");
    var emailSpan = document.getElementById("emailSpan");
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var btnEnvoi = document.getElementById("envoi");
    var btnReset = document.getElementById("btnReset");


    btnEnvoi.addEventListener("click", validation);
    function validation(e) {
        var error1 = "";
        var error2 = "";
        var error3 = "";
        var error4 = "";
        var alarm = true;

        if (pseudo.value.match(pseudoRegex)) {
            e.preventDefault();
            pseudo.style.border = "1px solid green";
            pseudoSpan.innerText = "";
        } else {
            pseudo.style.border = "1px solid red";
            pseudoSpan.style.visibility = "visible";
            error1 = "Pseudo invalid";
            alarm = false;
        }


        if (mdp.value.match(mdpRegex)) {
            e.preventDefault();
            mdp.style.border = "1px solid green";
            mdpSpan.innerText = "";
        } else {
            mdp.style.border = "1px solid red";
            mdpSpan.style.visibility = "visible";
            error2 = "Mdp invalid";
            alarm = false;
        };


        if (confirm.value == mdp.value && confirm.value.match(mdpRegex)) {
            e.preventDefault();
            confirm.style.border = "1px solid green";
            confirmSpan.innerText = "";
        }
        else {
            confirm.style.border = "1px solid red";
            confirmSpan.style.visibility = "visible";
            error3 = "Confirmation invalid";
            alarm = false;
        };


        if (email.value.match(emailRegex)) {
            e.preventDefault();
            email.style.border = "1px solid green";
            emailSpan.innerText = "";
        } else {
            email.style.border = "1px solid red";
            emailSpan.style.visibility = "visible";
            error4 = "email invalid";
            alarm = false;
        };

        if (alarm == false) {
            e.prevent
            alert(error1 + "\n" + error2 + "\n" + error3 + "\n" + error4);
        } else { //submit 
        };
    };



});