const email = document.querySelector("#email");
const selector = document.querySelector("#reason");
const textArea = document.querySelector("#textArea");

const erreurEmail = document.querySelector("#erreurEmail");
const erreurSelecteur = document.querySelector("#erreurSelecteur");
const erreurTextArea = document.querySelector("#erreurTextArea");

const emailLabel = document.querySelector("#emailLabel");
const selectorLabel = document.querySelector("#reasonLabel");
const textAreaLabel = document.querySelector("#textAreaLabel");

document.querySelector("#formulaire").addEventListener("submit", valider, true);

// focus et les erreures

function valider(e) {
    // regexEmail
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if ((regexEmail.test(email.value)) == false || email.value == "exemple123@hotmail.com") {
        e.preventDefault()
        if ((regexEmail.test(email.value)) == false) {
            erreurEmail.textContent = "Mauvais format pour l'email";
        }
        if (email.value == 0 || email.value == "exemple123@hotmail.com") {
            erreurEmail.textContent = "Entrez votre email"
        }
        
        email.className = "invalide";
        emailLabel.className = "label";
        email.focus();
        return false;
    }
    // Fin regexEmail & general Email settings

    if (selector.value == "Autre") {
        e.preventDefault();
        erreurSelecteur.textContent = "Veuillez spécifier la raison";
        selector.className = "invalide";
        selectorLabel.className = "label";
        selector.focus();
        return false;
    }

    if (textArea.value == 0) {
        e.preventDefault();
        erreurTextArea.textContent = "Veuillez décrire la raison !";
        textArea.className = "invalide";
        textAreaLabel.className = "label";
        textArea.focus();
        return false;
    }
}

// défocus et validation (erreures corrigées ?)

email.addEventListener("blur", verifierEmail, true);

function verifierEmail() {
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if ((regexEmail.test(email.value)) == true) {
        email.className = "valide";
        emailLabel.className = "labelNice";
        erreurEmail.textContent = "";
        selector.focus();
        return true;
    }
}

selector.addEventListener("blur", verifierSelector, true);

function verifierSelector() {
    if (selector.value != "Autre") {
        selector.className = "valide";
        selectorLabel.className = "labelNice";
        erreurSelecteur.textContent = "";
        textArea.focus();
        return true;
    }
}

textArea.addEventListener("blur", verifierTextArea, true);

function verifierTextArea() {
    if (textArea.value != 0) {
        textArea.className = "valide";
        textAreaLabel.className = "labelNice";
        erreurTextArea.textContent = "";
        return true;
    }
}