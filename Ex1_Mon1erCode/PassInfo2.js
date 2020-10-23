window.addEventListener("load", function(){
    // Texte

var patate = location.href;
console.log(patate);
var patate2 = patate.split("?");
console.log(patate2[1]);
var patate3 = patate2[1].split("&");
console.log(patate3);
var patate4 = patate3[1].split("=");
console.log(patate4);

var pomme = patate3[0].split("=");
console.log(pomme);

// var fraise = patate.substr(49, 20);
// console.log(fraise);


var val1 = document.getElementById("nombre");
val1.innerText = pomme[1];

var val2 = document.getElementById("texte");
val2.innerText = decodeURI(patate4[1]);

   // Formulaire

var btn1 = document.getElementById("btn1");
var txt1 = document.getElementById("txt1");

btn1.addEventListener ("click", function() {
    txt1.value = navigator.appCodeName;
}, false)

var btn2 = document.getElementById("btn2");
var txt2 = document.getElementById("txt2");

btn2.addEventListener ("click", function() {
    txt2.value = navigator.appName;
}, false)

var btn3 = document.getElementById("btn3");
var txt3 = document.getElementById("txt3");

btn3.addEventListener ("click", function() {
    txt3.value = navigator.appVersion;
}, false)

var btn4 = document.getElementById("btn4");
var txt4 = document.getElementById("txt4");

btn4.addEventListener ("click", function() {
    txt4.value = navigator.userAgent;
}, false)

var btnRetour = document.getElementById("retour");
btnRetour.addEventListener("click", function(){
    location.assign("http://127.0.0.1:5500/Ex1_Mon1erCode/PassInfo1.html?");
}, false)

});