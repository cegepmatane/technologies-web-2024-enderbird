// PARTIE PROFIL

const listeVignettes = document.querySelectorAll(".vignette-profil");

for (let i = 0; i < listeVignettes.length; i++) {
    listeVignettes[i].addEventListener("mousedown", function () {
        afficherDetailProfil(this.id);
    });
}
function afficherDetailProfil(profil) {
  let detail = document.querySelector("#detail-" + profil);
  let zoneAffichage = document.querySelector("#zone-affichage");

  zoneAffichage.innerHTML = detail.innerHTML;

  rapetisserProfilImage();
}

// PARTIE PARALLAX (C'EST DANS LE MÊME FICHIER PARCE QUE ÇA N'UPDATE PAS SINON :((((()

// J'ai eut de la misère ici ...
function rapetisserProfilImage() {
  let scrollPos = document.documentElement.scrollTop;

  let imageProfils = document.querySelectorAll(".profil-image"); 

  let scaleValue = 0.7 + scrollPos / 3000;

  // pour chaque img (queryselectorAll)
  imageProfils.forEach((img) => {
    img.style.transform = `scale(${scaleValue})`;
  });

  
}

document.addEventListener("scroll", function () {
  let scrollPos = document.documentElement.scrollTop;

  let backgroundProfil = document.querySelector("#zone-affichage");

  if (backgroundProfil) {
    backgroundProfil.style.backgroundSize = `${140 - scrollPos / 50}%`;
  }

  rapetisserProfilImage(); // POUR UPDATER LA TAILLE
});
