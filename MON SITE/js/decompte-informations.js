// créer un nouvel élément HTML en js
const balise = document.createElement("h1");
const item = document.querySelectorAll("article");

document.querySelector(".titre-header").innerText = "Nombre d'articles : " + item.length;