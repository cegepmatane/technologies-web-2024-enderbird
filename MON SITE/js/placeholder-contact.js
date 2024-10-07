// POUR L'EMAIL, DONC IL SE SITUE DANS LA CASE TEXT DE L'EMAIL.

const placeholderEmail = document.querySelector("#email");

placeholderEmail.addEventListener("focus", avecFocus);
placeholderEmail.addEventListener("blur", sansFocus);

placeholderEmail.value = "exemple123@hotmail.com";

function avecFocus() {
    if (placeholderEmail.value == "exemple123@hotmail.com") {
        placeholderEmail.value = "";
        // ajouter une classe pour changer la couleur en gris pâle
    }
}

function sansFocus() {
    if (placeholderEmail.value == "" && placeholderEmail.className != "invalide") {
        placeholderEmail.value = "exemple123@hotmail.com";
    }
}