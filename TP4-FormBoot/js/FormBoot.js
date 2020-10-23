$(window).ready(function () {

    var inputNom3Regex = /^[a-zA-Z_-]{4,16}$/;
    var prenomRegex = /^[a-zA-Z_-]{4,16}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    var pirate = [
        { "id": 1, "nom": "Luffy", "image": "img/Wanted Luffy.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 2, "nom": "Ace", "image": "img/WantedAce.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 3, "nom": "Shanks", "image": "img/WantedShanks.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 4, "nom": "Hancock", "image": "img/WantedHancock.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 5, "nom": "Robin", "image": "img/WantedRobin.jpg", "text": "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 6, "nom": "Law", "image": "img/WantedLaw.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 7, "nom": "Zorro", "image": "img/WantedZorro.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortoe ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.r ut, laoreet nisl." },
        { "id": 8, "nom": "El Formator", "image": "img/Wanted1.jpg", "text": "Recherché mort ou à peine vif pour faire subir un ensemble de TP a des stagiaires innocents. Cet élément est très dangereux ! " },
    ]

    $(".card-img-top").attr("src", pirate[0].image);
    $(".card-title").text(pirate[0].nom);
    $(".card-text").text(pirate[0].text);

    for (let i = 1; i < pirate.length; i++) {
        var copie = $("#cartePirate").clone();
        copie.find(".card-img-top").attr("src", pirate[i].image);
        copie.find(".card-title").text(pirate[i].nom);
        copie.find(".card-text").text(pirate[i].text);
        copie.appendTo($("#slide"));
    }


    // $("#corpus").hide();

    $(".report").click(function (e) {
        $("#corpus").show();
        let hauteur = $("#corpus").offset().top;
        $("html, body").animate({ scrollTop: hauteur }, 1500);

        let nom = pirate[0].nom;
        $("#p1").text("Vous dénoncez : " + nom);
        $("#p1").slideDown();
    })

    // Validation du formulaireuh !!!
    //-------------------------------

    // $("#inputNom3").keyup(function () {
    //     this.value = this.value.toUpperCase();
    //     if ($("#inputNom3").val().match(nomRegex)) {
    //         $("#inputNom3").css("border", "2px solid green");
    //     } else { $("#inputNom3").css("border", "2px solid red"); };
    // });


    // $("#inputPrenom3").keyup(function () {
    //     this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
    //     let VAL = this.value;
    //     if (prenomRegex.test(VAL)) {
    //         $("#inputPrenom3").css("border", "2px solid green");
    //     } else { $("#inputPrenom3").css("border", "2px solid red"); };
    // })

    $(".form-control").focus(function () {
        $(this).css("backgroundColor", "#888074");
        $(this).css("border", "#6D5B46")
        $(this).parent().parent().css("backgroundColor", "black");
    });
    $(".form-control").blur(function () {
        $(this).css("backgroundColor", "");
        $(this).css("border", "")
        $(this).parent().parent().css("backgroundColor", "");
    });
    // !!!!!!!!!!!!!

    $(".form-control").click(function () {
        let inputId = $(this).attr("id");
        let regle = inputId+"Regex"
        console.log(inputId);
        console.log(regle);
        try {
            if ($("#" + inputId + "").val().match(regle)) {
                $(this).parent().after("<span>TESTEUH</span>").css("color", "#CFC0AE");
            } else {
                throw "Erreur 66 !";
            }
        }catch (error) {
                    $("#spanNom3").text(error);
                    $("#spanNom3").css("color", "red");
        }
    })

    // $("#valider").click(function () {
    //     $("#corpus").show();

    //     // try {
    //     //     if ($("#inputNom3").val().match(nomRegex)) {
    //     //         $("#spanNom3").text("gg");
    //     //         $("#spanNom3").css("color", "#CFC0AE");
    //     //     } else {
    //     //         throw "Erreur 66 !";
    //     //     }
    //     // } catch (error) {
    //     //     $("#spanNom3").text(error);
    //     //     $("#spanNom3").css("color", "red");

    //     try {
    //         if ($("#inputPrenom3").val().match(prenomRegex)) {
    //             $("#spanPrenom3").text("gg");
    //             $("#spanPrenom3").css("color", "#CFC0AE");
    //         } else {
    //             throw "Erreur 66 !";
    //         }
    //     } catch (error) {
    //         $("#spanPrenom3").text(error);
    //         $("#spanPrenom3").css("color", "red");
    //     }

    //     try {
    //         if ($("#inputEmail3").val().match(emailRegex)) {
    //             $("#spanEmail3").text("gg");
    //             $("#spanEmail3").css("color", "#CFC0AE");
    //             $("#inputEmail3").css("border", "2px solid green");
    //         } else {
    //             throw "Erreur 66 !";
    //         }
    //     } catch (error) {
    //         $("#spanEmail3").text(error);
    //         $("#spanEmail3").css("color", "red");
    //         $("#inputEmail3").css("border", "2px solid red");
    //     }

    //     try {
    //         if ($("#inputDate3").val().match(dateRegex)) {
    //             $("#spanDate3").text("gg");
    //             $("#spanDate3").css("color", "#CFC0AE");
    //             $("#inputDate3").css("border", "2px solid green");
    //         } else {
    //             throw "Erreur 66 !";
    //         }
    //     } catch (error) {
    //         $("#spanDate3").text(error);
    //         $("#spanDate3").css("color", "red");
    //         $("#inputDate3").css("border", "2px solid red");
    //     }

    //     // remplissage du résumé à droite par les infos du formulaire : 
    //     // !!!!!!!!!!!!!!!!!!!!



    // });

    //-------------------------------

    $("#reset").click(function () {
        $("#spanNom3").hide();
        $("#spanPrenom3").hide();
        $("#spanEmail3").hide();
        $("#spanDate3").hide();
        $("#inputNom3").css("border", "none");
        $("#inputPrenom3").css("border", "none");
        $("#inputEmail3").css("border", "none");
        $("#inputDate3").css("border", "none");
    })

})