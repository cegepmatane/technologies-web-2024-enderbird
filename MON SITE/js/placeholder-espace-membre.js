// POUR LE PSEUDO, DONC IL SE SITUE DANS LA CASE TEXT DU PSEUDO.

const placeholderPseudo = document.querySelector("#pseudo");

placeholderPseudo.addEventListener("focus", etreAvecFocus);
placeholderPseudo.addEventListener("blur", etreSansFocus);
placeholderPseudo.addEventListener("mouseenter", etreAvecSouris);
placeholderPseudo.addEventListener("mouseleave", etreSansSouris);

placeholderPseudo.value = "averagestudent1234@hotmail.com / iAmSTEve";
placeholderPseudo.style.color = '#b3b0c1';

function etreAvecFocus() {
    if (placeholderPseudo.value == "averagestudent1234@hotmail.com / iAmSTEve") {
        placeholderPseudo.value = "";
        placeholderPseudo.style.color = 'black';
    }
    if (placeholderPseudo.value != "averagestudent1234@hotmail.com / iAmSTEve") {
        placeholderPseudo.style.color = 'black';
    }
}
function etreSansFocus() {
    if (placeholderPseudo.value == 0) {
        placeholderPseudo.value = "averagestudent1234@hotmail.com / iAmSTEve";
    }
    if (placeholderPseudo.value == "averagestudent1234@hotmail.com / iAmSTEve") {
        placeholderPseudo.style.color = '#b3b0c1';
    }
}

function etreAvecSouris() {
    if (placeholderPseudo.value == "averagestudent1234@hotmail.com / iAmSTEve") {
        placeholderPseudo.style.color = '#4400ff';
    }
}
function etreSansSouris() {
    if (placeholderPseudo.value == "averagestudent1234@hotmail.com / iAmSTEve") {
        placeholderPseudo.style.color = '#b3b0c1';
    }
}
