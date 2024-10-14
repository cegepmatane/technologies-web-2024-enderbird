// créer un nouvel élément HTML en js
const balise = document.createElement("h3");
const item = document.querySelectorAll(".article");

document.querySelector("#compteur-articles").appendChild(balise).innerText = "Nombre d'articles : " + item.length;
