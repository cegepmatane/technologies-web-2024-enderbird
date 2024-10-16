const email = document.querySelector("#email");
const selector = document.querySelector("#reason");
const textArea = document.querySelector("#textArea");

const erreurEmail = document.querySelector("#erreurEmail");
const erreurSelecteur = document.querySelector("#erreurSelecteur");
const erreurTextArea = document.querySelector("#erreurTextArea");

const emailLabel = document.querySelector("#emailLabel");
const selectorLabel = document.querySelector("#reasonLabel");
const textAreaLabel = document.querySelector("#textAreaLabel");

// Pour afficher une textArea quand "Autre" est sélectionné
const selectorPourquoi = document.querySelector("#reasoning")

document.querySelector("#formulaire").addEventListener("submit", valider, true);

// focus et les erreures

function valider(e) {
    // regexEmail
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if ((regexEmail.test(email.value)) == false || email.value == "averagestudent1234@hotmail.com") {
        e.preventDefault()
        if (email.value == 0 || email.value == "averagestudent1234@hotmail.com") {
            erreurEmail.textContent = "Entrez votre email !";
            email.value = "";
        }else {
            erreurEmail.textContent = "Mauvais format pour l'email";
        }
        erreurEmail.className = "erreur"
        email.className = "invalide";
        emailLabel.className = "label";
        email.focus();
        return false;
    }
    // Fin regexEmail & general Email settings

    if (selector.value == "Pas de valeur") {
        e.preventDefault();
        erreurSelecteur.textContent = "Veuillez spécifier la raison";
        selector.className = "invalide";
        selectorLabel.className = "label";
        selector.focus();
        return false;
    }

    // Si la case est le bouton "Autre"
    if (selector.value != "Autre raison") {
        selectorPourquoi.value = "";
        selectorPourquoi.className = "selectorAutreNo";
    }
    
    // pour afficher une textarea qui demande de spécifier quand "Autre" est sélectionné
    if (selector.value == "Autre raison" && selectorPourquoi.value == 0) {
        e.preventDefault();
        erreurSelecteur.textContent = "Veuillez spécifier la raison";
        selectorPourquoi.className = "invalide";
        selectorPourquoi.focus();
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
        erreurEmail.className = "labelNice";
        erreurEmail.textContent = "";
        selector.focus();
        return true;
    }
}

selector.addEventListener("blur", verifierSelector, true);

function verifierSelector() {
    if (selector.value != "Pas de valeur" && selector.value != "Autre raison") {
        selector.className = "valide";
        selectorLabel.className = "labelNice";
        selectorPourquoi.className = "selectorAutreNo";
        erreurSelecteur.textContent = "";
        textArea.focus();
        return true;
    }
}

selector.addEventListener("blur", verifierSelectorAutreRaison, true);

function verifierSelectorAutreRaison() {
    // pour afficher une textarea qui demande de spécifier quand "Autre" est sélectionné
    if (selector.value == "Autre raison") {
        selector.className = "valide";
        selectorPourquoi.className = "selectorAutreYes invalide";
        selectorPourquoi.focus();
        return true;
    } 
}
selectorPourquoi.addEventListener("blur", verifierSelectorPourquoi, true);

function verifierSelectorPourquoi() {
    if (selectorPourquoi.value != 0) {
        selectorPourquoi.className = "valide";
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