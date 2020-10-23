var valeur;

function bouton() {
    if (document.getElementById("semaine").checked) {
        valeur = document.getElementById("semaine").value;
    }
    
    else if (document.getElementById("week").checked) {
        valeur = document.getElementById("week").value;
    }

    console.log(valeur);
    document.getElementById("champ").value = valeur;
}