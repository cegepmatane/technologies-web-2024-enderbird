// POUR L'EMAIL, DONC IL SE SITUE DANS LA CASE TEXT DE L'EMAIL.

const placeholderEmail = document.querySelector("#email");

placeholderEmail.addEventListener("focus", etreAvecFocus);
placeholderEmail.addEventListener("blur", etreSansFocus);
placeholderEmail.addEventListener("mouseenter", etreAvecSouris);
placeholderEmail.addEventListener("mouseleave", etreSansSouris);

placeholderEmail.value = "averagestudent1234@hotmail.com";
placeholderEmail.style.color = '#b3b0c1';

function etreAvecFocus() {
    if (placeholderEmail.value == "averagestudent1234@hotmail.com") {
        placeholderEmail.value = "";
        placeholderEmail.style.color = 'black';
    }
    if (placeholderEmail.value != "averagestudent1234@hotmail.com") {
        placeholderEmail.style.color = 'black';
    }
}
function etreSansFocus() {
    if (placeholderEmail.value == "") {
        placeholderEmail.value = "averagestudent1234@hotmail.com";
    }
    if (placeholderEmail.value == "averagestudent1234@hotmail.com") {
        placeholderEmail.style.color = '#b3b0c1';
    }
}

function etreAvecSouris() {
    if (placeholderEmail.value == "averagestudent1234@hotmail.com") {
        placeholderEmail.style.color = '#4400ff';
    }
}
function etreSansSouris() {
    if (placeholderEmail.value == "averagestudent1234@hotmail.com") {
        placeholderEmail.style.color = '#b3b0c1';
    }
}