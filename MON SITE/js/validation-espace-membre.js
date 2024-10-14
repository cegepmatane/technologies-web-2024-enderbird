const pseudo = document.querySelector("#pseudo");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

const erreurPseudo = document.querySelector("#erreurPseudo");
const erreurPassword1 = document.querySelector("#erreurPassword1");
const erreurPassword2 = document.querySelector("#erreurPassword2");

const pseudoLabel = document.querySelector("#pseudoLabel");
const password1Label = document.querySelector("#password1Label");
const password2Label = document.querySelector("#password2Label");

document.querySelector("#formulaire").addEventListener("submit", valider, true);

function valider(e) {
    let regexPseudo = /^[a-zA-Z0-9_]{3,16}$/;

    if (regexPseudo.test(pseudo.value) == false || pseudo.value == 0) {
        e.preventDefault();
        if ((regexPseudo.test(pseudo.value)) == false) {
            erreurPseudo.textContent = "Pseudo impossible (format Minecraft)";
        }
        if (pseudo.value == 0) {
            erreurPseudo.textContent = "Entrez votre pseudo !";
        }
        pseudo.className = "invalide";
        pseudoLabel.className = "label";
        pseudo.focus();
        return false;
    }

    if (password1.value == 0) {
        e.preventDefault();
        erreurPassword1.textContent = "Entrez votre mot de passe";
        password1.className = "invalide";
        password1Label.className = "label";
        password1.focus();
        return false;
    }

    if (password2.value == 0 || password2.value != password1.value) {
        e.preventDefault();
        erreurPassword2.textContent = "Doit être identique";
        password2.className = "invalide";
        password2Label.className = "label";
        password2.focus();
        return false;
    }
}

pseudo.addEventListener("blur", verifierPseudo, true);

function verifierPseudo() {
    let regexPseudo = /^[a-zA-Z0-9_]{3,16}$/;
    
    if (regexPseudo.test(pseudo.value) == true) {
        pseudo.className = "valide";
        pseudoLabel.className = "labelNice";
        erreurPseudo.textContent = "";
        password1.focus();
        return true;
    }
}

password1.addEventListener("blur", verifierPassword1, true);

function verifierPassword1() {
    if (password1.value != 0) {
        password1.className = "valide";
        password1Label.className = "labelNice";
        erreurPassword1.textContent = "";
        password2.focus();
        return true;
    }
}

password2.addEventListener("blur", verifierPassword2, true);

function verifierPassword2() {
    if (password2.value != 0 && password2.value == password1.value) {
        password2.className = "valide";
        password2Label.className = "labelNice";
        erreurPassword2.textContent = "";
        return true;
    }
}