const boutonLirePlus = document.querySelectorAll(".bouton-lire-plus");
const texte = document.querySelectorAll(".texte");

for (let i = 0; i < boutonLirePlus.length; i++) {
    boutonLirePlus[i].addEventListener("click", function() {
        texte[i].classList.toggle("voirplus");
        if (boutonLirePlus[i].innerHTML == '<i class="fa-solid fa-arrow-up"></i>') {
            boutonLirePlus[i].innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
        }else {
            boutonLirePlus[i].innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        }
    })
}
