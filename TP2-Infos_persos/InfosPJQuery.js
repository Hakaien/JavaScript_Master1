$(window).ready(function () {

    var nomRegex = /^[a-zA-Z_-]{4,16}$/;
    var prenomRegex = /^[a-zA-Z_-]{4,16}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // -Pour info- nom.addEventListener("focus", function () {     );    
    $("#nom").keyup(function () {
        this.value = this.value.toUpperCase();
        if ($("#nom").val().match(nomRegex)) {
            $("#nom").css("color", "green");
            $("#nom").css("border", "2px solid green");
        } else { $("#nom").css("color", "red");
        $("#nom").css("border", "2px solid red"); };
    });


    $("#prenom").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
        let VAL = this.value;
        if (prenomRegex.test(VAL)) {
            $("#prenom").css("color", "green");
            $("#prenom").css("border", "2px solid green");
        } else { $("#prenom").css("color", "red");
        $("#prenom").css("border", "2px solid red");};
    })

    $("#envoi").click(function () {

        try {
            if ($("#nom").val().match(nomRegex)) {
                $("#nomSpan").text("gg");
                $("#nomSpan").css("color","green");
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            $("#nomSpan").text(error);
            $("#nomSpan").css("color","red");
        }

        try {
            if ($("#prenom").val().match(prenomRegex)) {
                $("#prenomSpan").text("gg");
                $("#prenomSpan").css("color","green");
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            $("#prenomSpan").text(error);
            $("#prenomSpan").css("color","red");
        }
        try {
            if ($("#email").val().match(emailRegex)) {
                $("#emailSpan").text("gg");
                $("#emailSpan").css("color","green");
                $("#email").css("border", "2px solid green");
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            $("#emailSpan").text(error);
            $("#emailSpan").css("color","red");
            $("#email").css("border", "2px solid red");
        }
    
    });


});