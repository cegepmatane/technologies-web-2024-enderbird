const boutonLirePlus = document.querySelectorAll(".bouton-lire-plus");
const texte = document.querySelectorAll(".texte");
const plusTexte = document.querySelectorAll(".plus-texte");

for (let i = 0; i < boutonLirePlus.length; i++) {
    boutonLirePlus[i].addEventListener("click", function() {
        texte[i].classList.toggle("voirplus");
        if (boutonLirePlus[i].innerHTML == '<i class="fa-solid fa-arrow-up"></i>') {
            boutonLirePlus[i].innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
            plusTexte[i].className = "disappear plus-texte";
        }else {
            boutonLirePlus[i].innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            plusTexte[i].className = "appear plus-texte";
        }
    })
}
