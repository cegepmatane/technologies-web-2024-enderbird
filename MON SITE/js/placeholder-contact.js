// POUR L'EMAIL, DONC IL SE SITUE DANS LA CASE TEXT DE L'EMAIL.

const placeholderEmail = document.querySelector("#email");

placeholderEmail.addEventListener("focus", avecFocus);
placeholderEmail.addEventListener("blur", sansFocus);

placeholderEmail.value = "averageStudent1234@hotmail.com";
placeholderEmail.className = "placeholder";

function avecFocus() {
    if (placeholderEmail.value == "averageStudent1234@hotmail.com") {
        placeholderEmail.value = "";
    }
}

function sansFocus() {
    if (placeholderEmail.value == "") {
        placeholderEmail.value = "averageStudent1234@hotmail.com";
    }

    if (placeholderEmail.value == "averageStudent1234@hotmail.com" && placeholderEmail.className != "invalide" && placeholderEmail.className != "valide") {
        placeholderEmail.className = "placeholder";
    }else {
        if (placeholderEmail.value == "averageStudent1234@hotmail.com") {
            placeholderEmail.style.color = '#b3b0c1';
        }
    }

    if (placeholderEmail.value != "averageStudent1234@hotmail.com" && placeholderEmail.className != "invalide" && placeholderEmail.className != "valide") {
        placeholderEmail.className = "placeholderFocus";
    }else {
        if (placeholderEmail.value != "averageStudent1234@hotmail.com") {
            placeholderEmail.style.color = 'black';
        }
    }
}