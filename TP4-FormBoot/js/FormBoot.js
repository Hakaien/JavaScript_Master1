$(window).ready(function () {

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

    $(".report").click(function () {
        $("#corpus").show();
        let hauteur = $("#corpus").offset().top;
        $("html, body").animate({ scrollTop: hauteur }, 1500);

        let nom = pirate[0].nom;
        $("#p1").text("Vous dénoncez : " + nom);
        $("#p1").slideDown();
    });

    // Validation du formulaireuh !!!
    //-------------------------------

    $(".form-control").on({
        keyup: function () {
            let inputId = $(this).attr("id");
            let inputPattern = $(this).attr("pattern");
            if ($("#" + inputId + "").val().match(inputPattern)) {
                $("#" + inputId + "").css("border", "2px solid green");
            } else { $("#" + inputId + "").css("border", "2px solid red"); };
        },
    });

    $("#inputNom3").keyup(function () {
        this.value = this.value.toUpperCase();
    });
    $("#inputPrenom3").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
    });


    $(".form-control").on({
        focus: function () {
            $(this).css("backgroundColor", "#888074");
            $(this).css("border", "#6D5B46")
            $(this).parent().parent().css("backgroundColor", "black");
        },
        blur: function () {
            $(this).css("backgroundColor", "");
            $(this).css("border", "")
            $(this).parent().parent().css("backgroundColor", "");
        },
    });
    // !!!!!!!!!!!!!

    $("#valider").on("click", function (e) {
        e.preventDefault();
        $("#corpus").show();
        longueur = $(".form-control").length;
        console.log(longueur);

        for (let i = longueur; i < 0; i--) {
            let inputId = $(".form-control").attr("id");
            let inputPattern = $(".form-control").attr("pattern");
            let inputSpan = $(".form-control").parent().next();
            console.log(inpuId);
            console.log(inputPattern);
            try {
                if ($("#" + inputId + "").val().match(inputPattern)) {
                    inputSpan.text("gg").css("color", "#CFC0AE");
                } else {
                    throw "Erreur 66 !";
                }
            } catch (error) {
                inputSpan.text(error);
                inputSpan.css("color", "red");
            }
        };
    });


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
    });

})