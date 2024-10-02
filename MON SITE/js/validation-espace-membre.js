const pseudo = document.querySelector("#pseudo");
const password = document.querySelector("#password");

const erreurPseudo = document.querySelector("#erreurPseudo");
const erreurPassword = document.querySelector("#erreurPassword");

const pseudoLabel = document.querySelector("#pseudoLabel");
const passwordLabel = document.querySelector("#passwordLabel");

document.querySelector("#formulaire").addEventListener("submit", valider, true);

function valider(e) {
    if (pseudo.value == "") {
        e.preventDefault();
        erreurPseudo.textContent = "Votre pseudo ?!?";
        pseudo.className = "invalide";
        pseudoLabel.className = "label";
        pseudo.focus();
        return false;
    }

    if (password.value == "") {
        e.preventDefault();
        erreurPassword.textContent = "Entrez votre mot de passe";
        password.className = "invalide";
        passwordLabel.className = "label";
        password.focus();
        return false;
    }
}

pseudo.addEventListener("blur", verifierPseudo, true);

function verifierPseudo() {
    if (pseudo.value != "") {
        pseudo.className = "valide";
        pseudoLabel.className = "labelNice";
        erreurPseudo.textContent = "";
        password.focus();
        return true;
    }
}

password.addEventListener("blur", verifierPassword, true);

function verifierPassword() {
    if (password.value != "") {
        password.className = "valide";
        passwordLabel.className = "labelNice";
        erreurPassword.textContent = "";
        return true;
    }
}