// Ça s'appelle "pseudo", mais l'email peut être entré dans cette case
// C'est juste le nom de la section qui s'appelle "pseudo"
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
    //regexPseudoMinecraft
    let regexPseudo = /^[a-zA-Z0-9_]{3,16}$/;
    //regexEmail
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if ((regexPseudo.test(pseudo.value) == false && regexEmail.test(pseudo.value) == false) || pseudo.value == "averagestudent1234@hotmail.com / iAmSTEve" || pseudo.value == "averagestudent1234@hotmail.com") {
        e.preventDefault();
        if (pseudo.value == "averagestudent1234@hotmail.com / iAmSTEve" || pseudo.value == 0) {
            erreurPseudo.textContent = "Entrez quelque chose !";
            pseudo.value = "";
        }else if (pseudo.value == "averagestudent1234@hotmail.com") {
            erreurPseudo.textContent = "Nuh uh !";
        }else {
            erreurPseudo.textContent = "Format invalide";
        }
        erreurPseudo.className = "erreur";
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
        if (password2.value == 0) {
            erreurPassword2.textContent = "Entrez le mot de passe";
        }else {
            erreurPassword2.textContent = "Doit être identique";
        }
        password2.className = "invalide";
        password2Label.className = "label";
        password2.focus();
        return false;
    }
}

pseudo.addEventListener("blur", verifierPseudo, true);

function verifierPseudo() {
    //regexPseudoMinecraft
    let regexPseudo = /^[a-zA-Z0-9_]{3,16}$/;
    //regexEmail
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if ((regexPseudo.test(pseudo.value) == true || regexEmail.test(pseudo.value) == true) && pseudo.value != "averagestudent1234@hotmail.com / iAmSTEve" && pseudo.value != "averagestudent1234@hotmail.com") {
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