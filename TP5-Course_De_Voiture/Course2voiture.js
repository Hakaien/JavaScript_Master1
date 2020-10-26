$(window).ready(function () {

    $("#btnGo").on("click", function () {
        alert('test');
    })

    var Voiture = function (x, y, img) {
        this.x = x;
        this.y = y;
        this.dessiner(img);
    };

    var car1 = new Voiture(1000, 105, "img/car1.png");
    var car2 = new Voiture(1000, 280, "img/car2.png");

    Voiture.prototype.dessiner = function (img) {
        // Placez js ici
    }

  

})